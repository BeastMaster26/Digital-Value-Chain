"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function DetailPesananGold() {
    const [selected, setSelected] = useState("pembiayaan")
    const router = useRouter();

    const payments = [
        { id: "pembiayaan", title: "Pembiayaan", subtitle:"BEWIZE Value Chain" },
        { id: "va", title: "Virtual Account", subtitle:"Virtual Account Billing" },
        { id: "db", title: "Direct Debit", subtitle:"BSI Debit Rekening" },
        { id: "qris", title: "QRIS", subtitle:"BSI QRIS" },
    ];

    return (
      <div className="space-y-2">
        <div className="grid grid-cols-1 [&>div]:flex [&>div]:justify-between space-y-2 text-xs">
          <div><h1>Supplier Emas</h1><h1>GLD01 - Emas DBW</h1></div>
          <div><h1>Pembeli</h1><h1>GLD02 - Digital Gold Partner</h1></div>
          <div><h1>Tanggal Transaksi</h1><h1>16/01/2026</h1></div>
          <div><h1>PO No.</h1><h1>BSIDVCGOLD01002000300004</h1></div>
          <div><h1>Quantity</h1><h1>100 gram</h1></div>
          <div><h1>Harga Emas per Gram</h1><h1>Rp. 2.270.000</h1></div>
          <div><h1 className="font-bold">Total Pembayaran</h1><h1 className="font-bold">Rp. 227.000.000</h1></div>
        </div>

        <CardTitle className="text-xl font-bold">Metode Pembayaran</CardTitle>
        <Card className="bg-linear-to-r from-[#2D9793] to-gray-200">
          <CardHeader />
          <CardContent className="space-y-4">
            <RadioGroup value={selected} onValueChange={setSelected}>
              {payments.map((item) => (
                <div key={item.id} className="relative">
                  <RadioGroupItem value={item.id} id={item.id} className="sr-only" />
                  <Label htmlFor={item.id} className={cn("flex items-center justify-between rounded-xl border bg-white px-4 py-4 shadow-sm transition-all cursor-pointer", selected === item.id ? "border-orange-400 ring-2 ring-orange-300" : "border-muted")}>
                    <div className="flex items-center gap-3">
                      <div className="text-teal-600 font-bold text-lg"><img src="/img/BSI.png" alt="BSI Logo" className="w-8 h-8 object-contain"/></div>
                      <div><p className="font-semibold">{item.title}</p><p className="text-sm text-muted-foreground">{item.subtitle}</p></div>
                    </div>
                    <RadioGroupItem value={item.id} id={item.id}/>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
        <Button onClick={() => router.push("/GOLD/transaction_management/buat_pesanan/detail_pesanan/detail_pembiayaan")} className="w-full rounded-xl bg-teal-600 hover:bg-teal-700 text-white ">
          Bayar
        </Button>
      </div>
    )
}