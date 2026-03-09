"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useRouter } from "next/navigation"

export default function TransaksiBerhasilPage() {

  const router = useRouter()

  return (
    <div className="space-y-2">

      <div className="space-y-4  items-center justify-between">

        {/* Success Header */}
        <div className="text-center shadow-lg bg-white">
          <CardContent className="pt-8 pb-6">

            <div className="flex justify-center mb-3">
              <div className="bg-gray-200 p-1 rounded-full shadow-2xl">
                <div className=" bg-teal-500 p-4 rounded-full shadow-2xl">
                <Check className="text-white w-7 h-7 stroke-3"/>
             </div> 
             </div>
            </div>

            <h1 className="text-lg font-bold text-black">
              Transaksi Berhasil
            </h1>

            <p className="text-sm text-gray-600">
              Pembayaran Anda telah berhasil diproses
            </p>

          </CardContent>
        </div>

<div className="bg-white p-3 shadow-lg ">
        {/* Detail Transaksi */}
        <CardTitle className="text-xl font-bold text-black space-y-2 mb-4">
            Detail Transaksi
          </CardTitle>

        <Card className="bg-linear-to-r from-[#37b7b2] to-gray-200 ">
            <div className="">
                
        <CardHeader>
         
        </CardHeader>

        <CardContent className="">
         <div className="grid grid-cols-1 [&>div]:flex [&>div]:justify-between space-y-4 font-medium pb-6 ">
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
         <div className="bg-white rounded-lg p-2 shadow-md text-center text-[12px] font-semibold  "> 
                  Jatuh Tempo Pembiayaan 12 Februari 2026 
                </div>
        </CardContent>
      
                </div>
              
        </Card>
        <Button onClick={() => router.push("/LPG/dashboard")} className="w-full rounded-xl bg-teal-600 hover:bg-teal-700 text-white mt-4 mb-2">
            Konfirmasi Pembayaran
          </Button>
         </div>
    </div>

    </div>
  )
}