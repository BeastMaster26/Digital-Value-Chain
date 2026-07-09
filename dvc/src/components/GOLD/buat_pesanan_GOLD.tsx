"use client";

import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function BuatPesananGold() {
    const router = useRouter();

    return (
      <div className="space-y-2">
        <div className="space-y-4">
          <div>
            <label className="text-gray-800 pb-2">Supplier Emas</label>
            <Input placeholder="Masukkan nama supplier emas" className="border-[#00A3A8] border-2" />
          </div>
          <div>
            <label className="text-gray-800 pb-2">Pembeli</label>
            <Input placeholder="Masukkan nama pembeli" className="border-[#00A3A8] border-2" />
          </div>
          <div>
            <label className="text-gray-800 pb-2">Tanggal Transaksi</label>
            <Input placeholder="DD/MM/YYYY" className="border-[#00A3A8] border-2" />
            <Calendar className="absolute top-59.5 right-10 text-[#00A3A8]"/>
          </div>
          <div>
            <label className="text-gray-800 pb-2">PO No.</label>
            <Input placeholder="Masukkan nomor PO emas" className="border-[#00A3A8] border-2" />
          </div>
          <div>
            <label className="text-gray-800 pb-2">Harga Emas per Gram</label>
            <Input placeholder="Contoh: Rp2.270.000" className="border-[#00A3A8] border-2" />
          </div>
          <div>
            <label className="text-gray-800 pb-2">Quantity Gram</label>
            <Input placeholder="Masukkan jumlah gram" className="border-[#00A3A8] border-2" />
          </div>
          <div>
            <label className="text-gray-800 pb-2">Total Pembayaran</label>
            <Input placeholder="Masukkan total pembayaran" className="border-[#00A3A8] border-2" />
          </div>
        </div>
        <Button onClick={() => router.push("/GOLD/transaction_management/buat_pesanan/detail_pesanan")} className="absolute right-5 h-3 text-xs transition-colors bg-linear-to-r from-teal-700 to-teal-500 text-white">
          Submit
        </Button>
      </div>
    )
}