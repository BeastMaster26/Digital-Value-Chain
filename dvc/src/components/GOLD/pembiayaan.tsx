"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Tenor from "./tenor";

export default function PembiayaanGold() {
    const router = useRouter();

    return (
      <div className="space-y-2">
        <div className="grid grid-cols-1 [&>div]:flex [&>div]:justify-between space-y-2 text-sm text-muted-foreground">
          <div><h1>Available Limit</h1><h1>Rp. 500.000.000</h1></div>
          <div><h1>Nomor Invoice</h1><h1>BSIDVCGOLD01002000300004</h1></div>
          <div><h1>Nominal Invoice</h1><h1>Rp. 227.000.000</h1></div>
        </div>
        <Tenor />
        <CardTitle className="text-xl font-bold">Ringkasan Pembiayaan Emas</CardTitle>
        <Card className="bg-linear-to-r from-[#37b7b2] to-gray-200">
          <CardHeader />
          <CardContent>
            <div className="grid grid-cols-1 [&>div]:flex [&>div]:justify-between space-y-4 font-medium pb-6">
              <div><h1>Nominal Invoice</h1><h1>Rp. 220.000.000</h1></div>
              <div><h1>Tenor</h1><h1>30 Hari</h1></div>
              <div><h1>Nominal Ujrah</h1><h1>Rp. 6.500.000</h1></div>
              <div><h1>Biaya Administrasi</h1><h1>Rp. 500.000</h1></div>
              <div><h1>Total Pembayaran</h1><h1>Rp. 227.000.000</h1></div>
            </div>
            <div className="bg-white rounded-lg p-2 shadow-md text-center text-[12px] font-semibold">
              Jatuh Tempo Pembiayaan 12 Februari 2026
            </div>
          </CardContent>
        </Card>
        <Button onClick={() => router.push("/GOLD/transaction_management/buat_pesanan/detail_pesanan/detail_pembiayaan/sukses_pembayaran")} className="w-full rounded-xl bg-teal-600 hover:bg-teal-700 text-white">
          Konfirmasi Pembayaran
        </Button>
      </div>
    )
}