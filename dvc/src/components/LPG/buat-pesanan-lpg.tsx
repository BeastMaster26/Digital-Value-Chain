"use client";

import { Calendar, X } from "lucide-react";
import Logo from '@/components/logo';
import Link from "next/link";
import Logo_side from "@/components/logo-sidebar";
import { usePathname, useRouter } from "next/navigation";
import Image from 'next/image'
import { ShoppingCart } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "radix-ui";
import { Button } from "../ui/button";

export default function buat_pesanan() {

    const pathname = usePathname();
    const router = useRouter();

    const menuItems = [
        { label: "Buat Pesanan", path: "/transaction_management/buat_pesanan" },
        { label: "Transaksi", path: "/transaction_management/transaksi" },
    ];

    return (
        <>  
         

         <div className="space-y-2">
            <div className="flex items-center justify-between  ">
             
             
             
            </div>
            <div className="space-y-3">
             <div className="">
             <label className="text-gray-800 pb-2">Pangkalan</label>
                <Input placeholder="Masukkan Nama Pangkalan" className="border-[#00A3A8]  border-2" />
                </div>
                <div className="">
             <label className="text-gray-800 pb-2">Agen</label>
                <Input placeholder="Masukkan Nama Agen" className="border-[#00A3A8]  border-2" />
                </div>
                <div className="">
             <label className="text-gray-800 pb-2">Tanggal Kirim</label>
                <Input placeholder="DD/MM/YYYY" className="border-[#00A3A8]  border-2" ></Input>
                <Calendar className="absolute top-59.5 right-10 text-[#00A3A8]"/>
                </div>
                <div className="">
             <label className="text-gray-800 pb-2">PO No.</label>
                <Input placeholder="Masukkan Nomer PO" className="border-[#00A3A8]  border-2" />
                </div>
                <div className="">
             <label className="text-gray-800 pb-2">Harga Per Tabung</label>
                <Input placeholder="Masukkan Pangkalan" className="border-[#00A3A8]  border-2" />
                </div>
                <div className="">
             <label className="text-gray-800 pb-2">Quantity</label>
                <Input placeholder="Masukkan Pangkalan" className="border-[#00A3A8]  border-2" />
                </div>
                <div className="">
             <label className="text-gray-800 pb-2">Total</label>
                <Input placeholder="Masukkan Pangkalan" className="border-[#00A3A8]  border-2" />
                </div>
                
            </div>
            <div className="">
                <Button onClick={() => router.push("/LPG/transaction_management/buat_pesanan/detail_pesanan")} className="absolute right-5   h-3 text-xs transition-colors bg-linear-to-r from-teal-700 to-teal-500 text-white " > Submit </Button>
                </div>
         </div>
        </>
    )
}


