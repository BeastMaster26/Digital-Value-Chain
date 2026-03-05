"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useRouter } from "next/navigation"

export default function TransaksiBerhasilPage() {

  const router = useRouter()

  return (
    <div className="flex items-center justify-center  ">

      <div className="w-full max-w-sm space-y-4">

        {/* Success Header */}
        <Card className="text-center shadow-lg rounded-xl">
          <CardContent className="pt-8 pb-6">

            <div className="flex justify-center mb-3">
              <div className="bg-teal-500 p-4 rounded-full shadow-md">
                <Check className="text-white w-7 h-7"/>
              </div>
            </div>

            <h1 className="text-lg font-bold">
              Transaksi Berhasil
            </h1>

            <p className="text-sm text-gray-600">
              Pembayaran Anda telah berhasil diproses
            </p>

          </CardContent>
        </Card>

<div className="bg-white p-6 rounded-md shadow-lg ">
        {/* Detail Transaksi */}
        <CardTitle className="text-xl font-bold text-black">
            Ringksan Pembiayaan
          </CardTitle>

        <Card className="bg-linear-to-r from-[#37b7b2] to-gray-200 ">
            <div className="">
                
        <CardHeader>
         
        </CardHeader>

        <CardContent className="">
         <div className="grid grid-cols-1 [&>div]:flex [&>div]:justify-between space-y- font-medium pb-6 ">
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
        <Button onClick={() => router.push("/LPG/dashboard")} className="w-full rounded-xl bg-teal-600 hover:bg-teal-700 text-white mt-4">
            Konfirmasi Pembayaran
          </Button>
         </div>
    </div>

    </div>
  )
}