'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Ruler } from "lucide-react";

export default function SizeGuide() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="text-xs font-bold underline underline-offset-2 text-gray-500 hover:text-black flex items-center gap-1">
                    <Ruler size={14} />
                    Size Guide
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto bg-white border-black sm:rounded-none">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-black uppercase tracking-tighter italic">Size Guide</DialogTitle>
                    <DialogDescription>
                        Find your perfect fit. Use the chart below to convert between standard size formats.
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs font-bold uppercase tracking-wider bg-black text-white">
                            <tr>
                                <th className="px-6 py-4">US - Men</th>
                                <th className="px-6 py-4">US - Women</th>
                                <th className="px-6 py-4">UK</th>
                                <th className="px-6 py-4">EU</th>
                                <th className="px-6 py-4">CM</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">4</td>
                                <td className="px-6 py-4">5</td>
                                <td className="px-6 py-4">3.5</td>
                                <td className="px-6 py-4">36</td>
                                <td className="px-6 py-4">22.1</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">4.5</td>
                                <td className="px-6 py-4">5.5</td>
                                <td className="px-6 py-4">4</td>
                                <td className="px-6 py-4">36.7</td>
                                <td className="px-6 py-4">22.5</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">5</td>
                                <td className="px-6 py-4">6</td>
                                <td className="px-6 py-4">4.5</td>
                                <td className="px-6 py-4">37.3</td>
                                <td className="px-6 py-4">22.9</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">5.5</td>
                                <td className="px-6 py-4">6.5</td>
                                <td className="px-6 py-4">5</td>
                                <td className="px-6 py-4">38</td>
                                <td className="px-6 py-4">23.3</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">6</td>
                                <td className="px-6 py-4">7</td>
                                <td className="px-6 py-4">5.5</td>
                                <td className="px-6 py-4">38.7</td>
                                <td className="px-6 py-4">23.8</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">6.5</td>
                                <td className="px-6 py-4">7.5</td>
                                <td className="px-6 py-4">6</td>
                                <td className="px-6 py-4">39.3</td>
                                <td className="px-6 py-4">24.2</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">7</td>
                                <td className="px-6 py-4">8</td>
                                <td className="px-6 py-4">6.5</td>
                                <td className="px-6 py-4">40</td>
                                <td className="px-6 py-4">24.6</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">7.5</td>
                                <td className="px-6 py-4">8.5</td>
                                <td className="px-6 py-4">7</td>
                                <td className="px-6 py-4">40.7</td>
                                <td className="px-6 py-4">25</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">8</td>
                                <td className="px-6 py-4">9</td>
                                <td className="px-6 py-4">7.5</td>
                                <td className="px-6 py-4">41.3</td>
                                <td className="px-6 py-4">25.5</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">8.5</td>
                                <td className="px-6 py-4">9.5</td>
                                <td className="px-6 py-4">8</td>
                                <td className="px-6 py-4">42</td>
                                <td className="px-6 py-4">25.9</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">9</td>
                                <td className="px-6 py-4">10</td>
                                <td className="px-6 py-4">8.5</td>
                                <td className="px-6 py-4">42.7</td>
                                <td className="px-6 py-4">26.3</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">9.5</td>
                                <td className="px-6 py-4">10.5</td>
                                <td className="px-6 py-4">9</td>
                                <td className="px-6 py-4">43.3</td>
                                <td className="px-6 py-4">26.7</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">10</td>
                                <td className="px-6 py-4">11</td>
                                <td className="px-6 py-4">9.5</td>
                                <td className="px-6 py-4">44</td>
                                <td className="px-6 py-4">27.1</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">10.5</td>
                                <td className="px-6 py-4">11.5</td>
                                <td className="px-6 py-4">10</td>
                                <td className="px-6 py-4">44.7</td>
                                <td className="px-6 py-4">27.6</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">11</td>
                                <td className="px-6 py-4">12</td>
                                <td className="px-6 py-4">10.5</td>
                                <td className="px-6 py-4">45.3</td>
                                <td className="px-6 py-4">28</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">11.5</td>
                                <td className="px-6 py-4">12.5</td>
                                <td className="px-6 py-4">11</td>
                                <td className="px-6 py-4">46</td>
                                <td className="px-6 py-4">28.4</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold">12</td>
                                <td className="px-6 py-4">13</td>
                                <td className="px-6 py-4">11.5</td>
                                <td className="px-6 py-4">46.7</td>
                                <td className="px-6 py-4">28.8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 p-4 bg-gray-50 border border-gray-100 text-xs text-gray-500">
                    <p className="font-bold uppercase tracking-wider mb-2">How to measure</p>
                    <p>
                        Stand on a level surface with your heels against a straight edge or wall. Measure your foot length by placing a ruler flat on the floor alongside the inside of your foot from your heel to your toes.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
}
