"use client";

import { useState } from "react";
import { Calendar, X } from "lucide-react";
import Logo from '@/components/logo';
import Link from "next/link";
import Logo_side from "@/components/logo_sidebar";
import { usePathname, useRouter } from "next/navigation";
import Image from 'next/image'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Tenor from "./tenor";
import tenor from "./tenor";

export default function pembiayaan() {
    const [selected, setSelected] = useState("pembiayaan")
    const pathname = usePathname();
    const router = useRouter();

    const payments = [
        { id: "Pembiayaan", title: "Pembiayaan", subtitle:"BEWIZE Value Chain" },
        { id: "va", title: "Virtual Account", subtitle:"Virtual Account Billing" },
        { id: "db", title: "Direct Debit", subtitle:"BSI Debit Rekening" },
        { id: "qris", title: "QRIS", subtitle:"BSI QRIS" },
    ];
 
    return (
        <>  
         

         <div className="space-y-2">
            <div className="flex items-center justify-between  ">
             
             
             
            </div>
            <div className="grid grid-cols-1 [&>div]:flex [&>div]:justify-between space-y-2 text-sm text-muted-foreground">
               <div>
                  <h1 className="">Available Limit</h1>
                   <h1 className="">Rp. 500.000.000</h1>
               </div>
               <div>
                  <h1 className="">Nomor Invoice</h1>
                   <h1 className="">BSIDVC01002000300004</h1>
               </div>
               <div>
                  <h1 className="">Nominal Invoice</h1>
                   <h1 className="">Rp. 1.600.000</h1>
               </div>
              
            </div>
            <Tenor />  
            <CardTitle className="text-xl font-bold">
            Ringksan Pembiayaan
          </CardTitle>

        <Card className="bg-linear-to-r from-[#37b7b2] to-gray-200">
            <div className="">
                
        <CardHeader>
         
        </CardHeader>

        <CardContent className="">
         <div className="grid grid-cols-1 [&>div]:flex [&>div]:justify-between space-y-4 font-medium pb-6">
          <div>
                  <h1 className="">Nominal Invoice</h1>
                   <h1 className="">Rp. 1.465.000</h1>
               </div>
               <div>
                  <h1 className="">Tenor</h1>
                   <h1 className="">30 Hari</h1>
               </div>
               <div>
                  <h1 className="">Nominal Ujrah</h1>
                   <h1 className="">Rp. 125.000</h1>
               </div>
               <div>
                  <h1 className="">Biaya Administrasi</h1>
                   <h1 className="">Rp. 10.000</h1>
               </div>
               <div>
                  <h1 className="">Total Pembayaran</h1>
                   <h1 className="">Rp. 1.600.000</h1>
               </div> 
                
         </div>
         <div className="bg-white rounded-lg p-2 shadow-md text-center text-[12px] font-semibold "> 
                  Jatuh Tempo Pembiayaan 12 Februari 2026 
                </div>
        </CardContent>
      
                </div>
              
        </Card>
        <Button onClick={() => router.push("/LPG/dashboard")} className="w-full rounded-xl bg-teal-600 hover:bg-teal-700 text-white">
            Konfirmasi Pembayaran
          </Button>
         </div>
        </>
    )
}


