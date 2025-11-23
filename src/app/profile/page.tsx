'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Package, Settings, LogOut, CreditCard, MapPin, ChevronRight, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push('/login');
                return;
            }
            setUser(user);
            setLoading(false);
        };
        getUser();
    }, [router, supabase]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/');
        router.refresh();
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
        );
    }

    // Mock Data
    const POINTS = 486;
    const LEVEL = 1;
    const ORDERS = [
        {
            id: 'AD950101288',
            date: 'November 17, 2025',
            total: 48.65,
            items: [
                { image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=400&auto=format&fit=crop', name: 'Adilette Comfort Slides' },
                { image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=400&auto=format&fit=crop', name: 'Adilette Comfort Slides' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-white py-12 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">
                            HI {user?.email?.split('@')[0].toUpperCase()}
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">
                                <User size={14} />
                            </div>
                            <span>{POINTS} points to spend</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <span className="block text-2xl font-black italic tracking-tighter">ELO CLUB</span>
                            <span className="block text-sm font-bold tracking-widest text-gray-500">LEVEL</span>
                        </div>
                        <div className="text-6xl font-black italic text-black">
                            {LEVEL}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-[1px]">
                <Tabs defaultValue="feed" className="w-full">
                    <div className="flex justify-center bg-white pb-0 border-b border-gray-100">
                        <TabsList className="bg-transparent h-auto p-0 gap-8">
                            <TabsTrigger
                                value="feed"
                                className="rounded-none border-b-4 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-2 py-4 text-sm font-bold tracking-widest uppercase text-gray-500 data-[state=active]:text-black"
                            >
                                Feed
                            </TabsTrigger>
                            <TabsTrigger
                                value="orders"
                                className="rounded-none border-b-4 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-2 py-4 text-sm font-bold tracking-widest uppercase text-gray-500 data-[state=active]:text-black"
                            >
                                Orders
                            </TabsTrigger>
                            <TabsTrigger
                                value="account"
                                className="rounded-none border-b-4 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-2 py-4 text-sm font-bold tracking-widest uppercase text-gray-500 data-[state=active]:text-black"
                            >
                                Account
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* FEED TAB */}
                    <TabsContent value="feed" className="py-12 space-y-12">
                        {/* Vouchers */}
                        <section>
                            <h2 className="text-xl font-bold uppercase mb-4">Your Vouchers</h2>
                            <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                                <p className="text-gray-600 mb-4">You don't have any vouchers currently.</p>
                                <p className="text-gray-600 mb-6">You currently don't have enough Elo points to unlock discount vouchers.</p>
                                <Link href="#" className="text-sm font-bold underline underline-offset-4 hover:text-gray-600">
                                    HOW TO EARN MORE POINTS
                                </Link>
                            </div>
                        </section>

                        {/* More of what you love */}
                        <section>
                            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">More of what you love</h2>
                            <p className="text-gray-600 mb-8">We've collected some of our favourite products based on your preferences and purchases.</p>
                            {/* Placeholder for product grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="aspect-[3/4] bg-gray-100 animate-pulse"></div>
                                ))}
                            </div>
                        </section>
                    </TabsContent>

                    {/* ORDERS TAB */}
                    <TabsContent value="orders" className="py-12">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Orders</h2>

                        <Tabs defaultValue="online" className="w-full">
                            <TabsList className="bg-transparent h-auto p-0 gap-6 mb-8 justify-start border-b border-gray-200 w-full">
                                <TabsTrigger
                                    value="online"
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-2 text-base font-bold text-gray-500 data-[state=active]:text-black"
                                >
                                    Online
                                </TabsTrigger>
                                <TabsTrigger
                                    value="instore"
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-2 text-base font-bold text-gray-500 data-[state=active]:text-black"
                                >
                                    In-store
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="online" className="space-y-6">
                                <div className="flex justify-end mb-4">
                                    <button className="flex items-center gap-2 text-sm font-medium border border-gray-300 px-4 py-2 hover:bg-gray-50">
                                        View orders from: <span className="font-bold">Any time</span>
                                    </button>
                                </div>

                                {ORDERS.map(order => (
                                    <div key={order.id} className="border border-black">
                                        <div className="bg-white p-4 flex justify-between items-start border-b border-gray-100">
                                            <div>
                                                <div className="bg-black text-white px-2 py-1 text-xs font-bold inline-block mb-1">TOTAL</div>
                                                <div className="text-xl font-bold">${order.total}</div>
                                            </div>
                                            <div className="text-right text-xs text-gray-500">
                                                <div>Order number: {order.id}</div>
                                                <div>Order placed: {order.date}</div>
                                            </div>
                                        </div>
                                        <div className="p-6 bg-gray-50 flex flex-col md:flex-row gap-8">
                                            <div className="flex-1 flex gap-4">
                                                {order.items.map((item, idx) => (
                                                    <div key={idx} className="w-32 aspect-square bg-white p-2 flex items-center justify-center">
                                                        <Image src={item.image} alt={item.name} width={100} height={100} className="object-contain" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex flex-col gap-3 min-w-[250px]">
                                                <button className="w-full py-3 px-4 border border-black bg-white hover:bg-black hover:text-white transition-colors text-sm font-bold flex justify-between items-center group">
                                                    Report a delivery issue
                                                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                </button>
                                                <button className="w-full py-3 px-4 border border-black bg-white hover:bg-black hover:text-white transition-colors text-sm font-bold flex justify-between items-center group">
                                                    Exchange or return
                                                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                </button>
                                                <div className="text-right text-xs font-bold mt-2 flex items-center justify-end gap-1">
                                                    Elo points: <span className="text-sm">486</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>

                            <TabsContent value="instore" className="py-20 text-center">
                                <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">No Orders Found</h3>
                                <p className="text-gray-600 mb-8">Looks like you don't have any offline orders.</p>
                                <div className="text-left max-w-md mx-auto">
                                    <p className="text-sm mb-2">Looking for an order placed from another account?</p>
                                    <Link href="#" className="text-sm font-bold underline underline-offset-4 hover:text-gray-600">
                                        Check the status of your order
                                    </Link>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </TabsContent>

                    {/* ACCOUNT TAB */}
                    <TabsContent value="account" className="py-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            {/* Sidebar */}
                            <div className="space-y-1">
                                <h3 className="font-bold text-lg mb-6 uppercase">Account Overview</h3>
                                <button className="w-full text-left py-3 px-2 font-bold bg-gray-50 flex justify-between items-center">
                                    Personal Information
                                    <ChevronRight size={16} />
                                </button>
                                <button className="w-full text-left py-3 px-2 font-medium hover:bg-gray-50 flex justify-between items-center transition-colors">
                                    Address Book
                                    <ChevronRight size={16} />
                                </button>
                                <button className="w-full text-left py-3 px-2 font-medium hover:bg-gray-50 flex justify-between items-center transition-colors">
                                    Preferences
                                    <ChevronRight size={16} />
                                </button>
                                <button className="w-full text-left py-3 px-2 font-medium hover:bg-gray-50 flex justify-between items-center transition-colors">
                                    Elo Pass
                                </button>
                                <button
                                    onClick={handleSignOut}
                                    className="w-full text-left py-3 px-2 font-medium hover:bg-gray-50 text-gray-600 mt-8"
                                >
                                    Log out
                                </button>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-3">
                                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">My Details</h2>
                                <p className="text-gray-600 mb-12">Feel free to edit any of your details below so your account is up to date.</p>

                                <div className="mb-12">
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Details</h3>
                                    <div className="space-y-4 text-sm">
                                        <div className="font-bold uppercase">{user?.email?.split('@')[0]} PANCHAL</div>
                                        <div className="text-gray-600">2001-17-07</div>
                                        <div className="text-gray-600 uppercase">MALE</div>
                                        <button className="font-bold underline underline-offset-4 hover:text-gray-600 uppercase text-xs tracking-wider">
                                            Edit
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Login Details</h3>
                                    <div className="space-y-4 text-sm">
                                        <div className="font-bold">EMAIL</div>
                                        <div className="text-gray-600">{user?.email}</div>
                                        <div className="font-bold mt-4">PASSWORD</div>
                                        <div className="text-gray-600">•••••••••••••</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Chat Button (Fixed) */}
            <button className="fixed bottom-8 right-8 bg-black text-white p-4 shadow-lg hover:bg-gray-800 transition-colors z-50 rounded-full">
                <MessageSquare size={24} />
            </button>
        </div>
    );
}
