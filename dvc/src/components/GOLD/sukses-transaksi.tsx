"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SuksesTransaksiGold() {
  const router = useRouter()

  return (
    <div className="space-y-2">
      <div className="space-y-4 items-center justify-between">
        <div className="text-center shadow-lg bg-white">
          <CardContent className="pt-8 pb-6">
            <div className="flex justify-center mb-3">
              <div className="bg-gray-200 p-1 rounded-full shadow-2xl"><div className="bg-teal-500 p-4 rounded-full shadow-2xl"><Check className="text-white w-7 h-7 stroke-3"/></div></div>
            </div>
            <h1 className="text-lg font-bold text-black">Transaksi Emas Berhasil</h1>
            <p className="text-sm text-gray-600">Pembayaran emas Anda telah berhasil diproses</p>
          </CardContent>
        </div>
        <div className="bg-white p-3 shadow-lg">
          <CardTitle className="text-xl font-bold text-black space-y-2 mb-4">Detail Transaksi Emas</CardTitle>
          <Card className="bg-linear-to-r from-[#37b7b2] to-gray-200">
            <CardHeader />
            <CardContent>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 font-medium pb-6">
                <span>Nominal Invoice</span><span className="text-right whitespace-nowrap">Rp. 220.000.000</span>
                <span>Tenor</span><span className="text-right">30 Hari</span>
                <span>Nominal Ujrah</span><span className="text-right whitespace-nowrap">Rp. 6.500.000</span>
                <span>Biaya Administrasi</span><span className="text-right whitespace-nowrap">Rp. 500.000</span>
                <span className="font-semibold">Total Pembayaran</span><span className="text-right font-semibold whitespace-nowrap">Rp. 227.000.000</span>
              </div>
              <div className="bg-white rounded-lg p-2 shadow-md text-center text-[12px] font-semibold">Jatuh Tempo Pembiayaan 12 Februari 2026</div>
            </CardContent>
          </Card>
          <Button onClick={() => router.push("/GOLD/dashboard")} className="w-full rounded-xl bg-teal-600 hover:bg-teal-700 text-white mt-4 mb-2">
            Kembali ke Dashboard Gold
          </Button>
        </div>
      </div>
    </div>
  )
}