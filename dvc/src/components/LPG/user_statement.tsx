"use client";

import { Calendar, Check, ChevronRight, Menu, X } from "lucide-react";
import Logo from '@/components/logo';
import Link from "next/link";
import Logo_side from "@/components/logo_sidebar";
import { usePathname, useRouter } from "next/navigation";
import Image from 'next/image'
import { ShoppingCart } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "radix-ui";
import { Button } from "../ui/button";

export default function user_statement() {

    const pathname = usePathname();
    const router = useRouter();

    return (
        <>
        <div className="max-w-md mx-auto min-h-screen bg-white">

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 sticky top-0 bg-white z-10">
                <div>
                    <p className="text-sm font-medium text-gray-800">Assalamu&apos;alaikum,</p>
                    <p className="text-xs text-gray-500">Selamat datang di BEWIZE by BSI</p>
                </div>
                <button aria-label="Buka menu">
                    <Menu className="w-5 h-5 text-gray-800" />
                </button>
            </div>

            <div className="px-4 pt-3 pb-6 space-y-4">

                {/* Breadcrumb */}
                <div className="flex items-center gap-1 text-[11px] text-gray-400">
                    <span>BEWIZE Gold</span>
                    <ChevronRight className="w-3 h-3" />
                    <span>Account Information</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-[#00A3A8] font-medium">Gold Account Information</span>
                </div>

                {/* Tabs */}
                <div className="flex gap-2">
                    <Button
                        onClick={() => router.push("/gold/account_information")}
                        className="flex-1 h-9 text-xs bg-linear-to-r from-teal-700 to-teal-500 text-white"
                    >
                        Gold Acc Information
                    </Button>
                    <Button
                        onClick={() => router.push("/gold/account_information/statement")}
                        className="flex-1 h-9 text-xs bg-white border-2 border-[#00A3A8] text-[#00A3A8]"
                    >
                        Account Statement
                    </Button>
                </div>

                {/* Gold balance */}
                <Card className="border-2 border-[#00A3A8] p-4 space-y-3">
                    <div>
                        <Label.Root className="text-gray-500 text-xs">Gold Balance</Label.Root>
                        <p className="text-2xl font-semibold text-gray-800">500 grams</p>
                        <p className="text-sm text-gray-500">Rp681.000.000</p>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex-1 bg-gray-50 rounded-md p-2">
                            <Label.Root className="text-[10px] text-gray-400">Status NPWP</Label.Root>
                            <p className="text-xs font-medium text-green-600 flex items-center gap-1 mt-1">
                                <Check className="w-3.5 h-3.5" /> Verified
                            </p>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-md p-2">
                            <Label.Root className="text-[10px] text-gray-400">Potensi Keuntungan</Label.Root>
                            <p className="text-xs font-medium mt-1">
                                Rp2.270.000 <span className="text-green-600">5.1%</span>
                            </p>
                        </div>
                    </div>
                </Card>

                {/* Buy / sell price */}
                <div className="flex gap-2">
                    <Card className="flex-1 border-2 border-amber-400 p-3">
                        <Label.Root className="text-[10px] text-gray-500">Buying Price (/gram)</Label.Root>
                        <p className="text-sm font-medium text-amber-500 mt-1">Rp2.270.000</p>
                    </Card>
                    <Card className="flex-1 border-2 border-[#00A3A8] p-3">
                        <Label.Root className="text-[10px] text-gray-500">Selling Price (/gram)</Label.Root>
                        <p className="text-sm font-medium text-[#00A3A8] mt-1">Rp2.270.000</p>
                    </Card>
                </div>
                <p className="text-[10px] text-gray-400">
                    Terakhir diperbarui: 22/12/2025 10:05:00
                </p>

                {/* Portfolio */}
                <div className="space-y-3">
                    <Label.Root className="text-gray-800 font-medium text-sm">Gold Portofolio</Label.Root>

                    <Card className="p-4 space-y-2.5">
                        <PortfolioRow label="Nomor Akun" value="880707070707" />
                        <PortfolioRow label="Total Gram" value="500" strong />
                        <PortfolioRow label="Rata-rata Harga Beli" value="Rp2.100.000/gram" />
                        <PortfolioRow label="Total IDR" value="Rp954.820.000" />
                        <PortfolioRow label="Total Harga Jual" value="Rp955.820.000" last />

                        <Button
                            onClick={() => router.push("/gold/account_information/statement")}
                            className="w-full h-8 text-xs bg-white border-2 border-[#00A3A8] text-[#00A3A8] mt-2"
                        >
                            Lihat Statement
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
        </>
    )
}

function PortfolioRow({
    label,
    value,
    strong,
    last,
}: {
    label: string;
    value: string;
    strong?: boolean;
    last?: boolean;
}) {
    return (
        <div className={`flex justify-between text-xs ${!last ? "pb-2 border-b border-gray-100" : ""}`}>
            <span className="text-gray-500">{label}</span>
            <span className={strong ? "font-semibold text-gray-800" : "text-gray-700"}>{value}</span>
        </div>
    )
}
