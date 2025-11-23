'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_PRODUCTS } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronLeft, Lock, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const productId = searchParams.get('id');
    const size = searchParams.get('size');

    const { cartItems, getCartCount } = useCart();

    // Determine items to checkout: either from query params (Buy Now) or Cart
    let checkoutItems: any[] = [];

    if (productId) {
        const product = ALL_PRODUCTS.find(p => p.id === productId);
        if (product) {
            checkoutItems = [{
                product,
                size: size || 'N/A',
                quantity: 1,
                price: product.price
            }];
        }
    } else {
        checkoutItems = cartItems.map(item => {
            const p = ALL_PRODUCTS.find(prod => prod.id === item.productId);
            return p ? {
                product: p,
                size: item.size,
                quantity: item.quantity,
                price: p.price
            } : null;
        }).filter(Boolean);
    }

    const [shippingMethod, setShippingMethod] = useState('standard');
    const [paymentMethod, setPaymentMethod] = useState('card');

    if (checkoutItems.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Cart is empty</h1>
                    <Link href="/" className="underline">Continue Shopping</Link>
                </div>
            </div>
        );
    }

    const subtotal = checkoutItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shippingCost = shippingMethod === 'standard' ? 0 : shippingMethod === 'expedited' ? 19.95 : 25.95;
    const tax = subtotal * 0.08; // Mock tax 8%
    const total = subtotal + shippingCost + tax;

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/cart" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-gray-600 transition-colors">
                        <ChevronLeft size={16} />
                        Back to Cart
                    </Link>
                    <div className="text-2xl font-black tracking-tighter italic">ELO</div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <Lock size={14} />
                        Secure Checkout
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Forms */}
                    <div className="lg:col-span-7 space-y-12">

                        {/* Contact & Shipping */}
                        <section>
                            <h2 className="text-xl font-black uppercase tracking-tighter italic mb-6">Shipping Address</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <Label htmlFor="email" className="uppercase text-xs font-bold tracking-wider mb-2 block">Email</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" className="rounded-none border-black focus-visible:ring-0 focus-visible:ring-offset-0" />
                                </div>
                                <div className="md:col-span-1">
                                    <Label htmlFor="firstName" className="uppercase text-xs font-bold tracking-wider mb-2 block">First Name</Label>
                                    <Input id="firstName" type="text" placeholder="First Name" className="rounded-none border-black focus-visible:ring-0 focus-visible:ring-offset-0" />
                                </div>
                                <div className="md:col-span-1">
                                    <Label htmlFor="lastName" className="uppercase text-xs font-bold tracking-wider mb-2 block">Last Name</Label>
                                    <Input id="lastName" type="text" placeholder="Last Name" className="rounded-none border-black focus-visible:ring-0 focus-visible:ring-offset-0" />
                                </div>
                                <div className="md:col-span-2">
                                    <Label htmlFor="address" className="uppercase text-xs font-bold tracking-wider mb-2 block">Address</Label>
                                    <Input id="address" type="text" placeholder="Street Address" className="rounded-none border-black focus-visible:ring-0 focus-visible:ring-offset-0" />
                                </div>
                                <div className="md:col-span-2">
                                    <Label htmlFor="apartment" className="uppercase text-xs font-bold tracking-wider mb-2 block">Apartment, suite, etc. (optional)</Label>
                                    <Input id="apartment" type="text" placeholder="Apt, Suite, Unit" className="rounded-none border-black focus-visible:ring-0 focus-visible:ring-offset-0" />
                                </div>
                                <div className="md:col-span-1">
                                    <Label htmlFor="city" className="uppercase text-xs font-bold tracking-wider mb-2 block">City</Label>
                                    <Input id="city" type="text" placeholder="City" className="rounded-none border-black focus-visible:ring-0 focus-visible:ring-offset-0" />
                                </div>
                                <div className="md:col-span-1">
                                    <Label htmlFor="zip" className="uppercase text-xs font-bold tracking-wider mb-2 block">Zip Code</Label>
                                    <Input id="zip" type="text" placeholder="Zip Code" className="rounded-none border-black focus-visible:ring-0 focus-visible:ring-offset-0" />
                                </div>
                                <div className="md:col-span-2">
                                    <Label htmlFor="phone" className="uppercase text-xs font-bold tracking-wider mb-2 block">Phone</Label>
                                    <Input id="phone" type="tel" placeholder="Phone Number" className="rounded-none border-black focus-visible:ring-0 focus-visible:ring-offset-0" />
                                </div>
                            </div>
                        </section>

                        <Separator className="bg-gray-200" />

                        {/* Shipping Options */}
                        <section>
                            <h2 className="text-xl font-black uppercase tracking-tighter italic mb-6">Shipping Method</h2>
                            <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="space-y-4">
                                <div className={`flex items-center justify-between border p-4 transition-colors cursor-pointer ${shippingMethod === 'standard' ? 'border-black bg-gray-50' : 'border-gray-200'}`}>
                                    <div className="flex items-center space-x-3">
                                        <RadioGroupItem value="standard" id="standard" />
                                        <Label htmlFor="standard" className="cursor-pointer font-bold uppercase tracking-wide text-sm">Standard Delivery</Label>
                                    </div>
                                    <span className="font-bold text-sm">Free</span>
                                </div>
                                <div className={`flex items-center justify-between border p-4 transition-colors cursor-pointer ${shippingMethod === 'expedited' ? 'border-black bg-gray-50' : 'border-gray-200'}`}>
                                    <div className="flex items-center space-x-3">
                                        <RadioGroupItem value="expedited" id="expedited" />
                                        <Label htmlFor="expedited" className="cursor-pointer font-bold uppercase tracking-wide text-sm">Expedited (2-3 Days)</Label>
                                    </div>
                                    <span className="font-bold text-sm">$19.95</span>
                                </div>
                                <div className={`flex items-center justify-between border p-4 transition-colors cursor-pointer ${shippingMethod === 'rush' ? 'border-black bg-gray-50' : 'border-gray-200'}`}>
                                    <div className="flex items-center space-x-3">
                                        <RadioGroupItem value="rush" id="rush" />
                                        <Label htmlFor="rush" className="cursor-pointer font-bold uppercase tracking-wide text-sm">Rush (Next Day)</Label>
                                    </div>
                                    <span className="font-bold text-sm">$25.95</span>
                                </div>
                            </RadioGroup>
                        </section>

                        <Separator className="bg-gray-200" />

                        {/* Payment */}
                        <section>
                            <h2 className="text-xl font-black uppercase tracking-tighter italic mb-6">Payment</h2>
                            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4 mb-6">
                                <div className={`flex items-center space-x-3 border p-4 transition-colors cursor-pointer ${paymentMethod === 'card' ? 'border-black bg-gray-50' : 'border-gray-200'}`}>
                                    <RadioGroupItem value="card" id="card" />
                                    <Label htmlFor="card" className="cursor-pointer font-bold uppercase tracking-wide text-sm flex items-center gap-2">
                                        Credit Card
                                        <div className="flex gap-1 ml-2">
                                            <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
                                            <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
                                        </div>
                                    </Label>
                                </div>
                                {paymentMethod === 'card' && (
                                    <div className="p-4 bg-gray-50 border-x border-b border-gray-200 -mt-4 space-y-4">
                                        <div>
                                            <Label htmlFor="cardNumber" className="uppercase text-xs font-bold tracking-wider mb-2 block">Card Number</Label>
                                            <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="rounded-none bg-white border-gray-300" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="expiry" className="uppercase text-xs font-bold tracking-wider mb-2 block">Expiry</Label>
                                                <Input id="expiry" placeholder="MM/YY" className="rounded-none bg-white border-gray-300" />
                                            </div>
                                            <div>
                                                <Label htmlFor="cvc" className="uppercase text-xs font-bold tracking-wider mb-2 block">CVC</Label>
                                                <Input id="cvc" placeholder="123" className="rounded-none bg-white border-gray-300" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className={`flex items-center space-x-3 border p-4 transition-colors cursor-pointer ${paymentMethod === 'paypal' ? 'border-black bg-gray-50' : 'border-gray-200'}`}>
                                    <RadioGroupItem value="paypal" id="paypal" />
                                    <Label htmlFor="paypal" className="cursor-pointer font-bold uppercase tracking-wide text-sm">PayPal</Label>
                                </div>
                                <div className={`flex items-center space-x-3 border p-4 transition-colors cursor-pointer ${paymentMethod === 'afterpay' ? 'border-black bg-gray-50' : 'border-gray-200'}`}>
                                    <RadioGroupItem value="afterpay" id="afterpay" />
                                    <Label htmlFor="afterpay" className="cursor-pointer font-bold uppercase tracking-wide text-sm">Afterpay</Label>
                                </div>
                            </RadioGroup>

                            <div className="flex items-center space-x-2 mb-8">
                                <Checkbox id="billing" defaultChecked className="rounded-none data-[state=checked]:bg-black data-[state=checked]:text-white border-black" />
                                <Label htmlFor="billing" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Billing address same as shipping
                                </Label>
                            </div>

                            <button className="w-full bg-[#b91c1c] text-white font-black uppercase tracking-widest py-5 hover:bg-[#991b1b] transition-colors text-lg">
                                Pay ${total.toFixed(2)}
                            </button>
                        </section>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-5">
                        <div className="bg-gray-50 p-8 sticky top-24">
                            <h2 className="text-xl font-black uppercase tracking-tighter italic mb-6">Order Summary</h2>

                            <div className="space-y-6 mb-6 pb-6 border-b border-gray-200 max-h-[400px] overflow-y-auto">
                                {checkoutItems.map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="relative w-24 h-24 bg-white flex-shrink-0 border border-gray-200">
                                            <Image
                                                src={item.product.image}
                                                alt={item.product.name}
                                                fill
                                                className="object-cover mix-blend-multiply p-2"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold uppercase tracking-wide text-sm mb-1">{item.product.name}</h3>
                                            <p className="text-sm text-gray-500 mb-1 capitalize">{item.product.gender}'s {item.product.category}</p>
                                            <p className="text-sm font-medium">Size: {item.size}</p>
                                            <p className="text-sm font-medium">Qty: {item.quantity}</p>
                                            <p className="font-bold mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 text-sm mb-6 pb-6 border-b border-gray-200">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium">{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="font-medium">${tax.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end mb-8">
                                <span className="font-black uppercase tracking-wider text-lg">Total</span>
                                <span className="font-black text-2xl">${total.toFixed(2)}</span>
                            </div>

                            <div className="text-xs text-gray-500 space-y-2">
                                <p>Secure Checkout - SSL Encrypted</p>
                                <p>Free Returns within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
