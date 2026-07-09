"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Card } from "../ui/card";
import { Label } from "radix-ui";
import { Button } from "../ui/button";

type Tab = "information" | "statement";

const orderHistory = [
    { date: "22/12/2025", amount: 227_000_000, grams: 100 },
    { date: "15/12/2025", amount: 68_100_000, grams: 30 },
    { date: "01/12/2025", amount: 340_500_000, grams: 150 },
    { date: "18/11/2025", amount: 45_400_000, grams: 20 },
    { date: "02/11/2025", amount: 227_000_000, grams: 100 },
    { date: "10/10/2025", amount: 22_700_000, grams: 10 },
];

export default function UserTransaksiGold() {
    const [activeTab, setActiveTab] = useState<Tab>("information");

    return (
      <div className="w-full bg-white">
        <div className="px-2 pt-3 pb-6 space-y-4">
          <div className="flex gap-2">
            <Button onClick={() => setActiveTab("information")} className={activeTab === "information" ? "flex-1 h-9 text-xs bg-linear-to-r from-amber-500 to-yellow-400 text-white" : "flex-1 h-9 text-xs bg-white border-2 border-[#00A3A8] text-[#00A3A8]"}>Gold Acc Information</Button>
            <Button onClick={() => setActiveTab("statement")} className={activeTab === "statement" ? "flex-1 h-9 text-xs bg-linear-to-r from-amber-500 to-yellow-400 text-white" : "flex-1 h-9 text-xs bg-white border-2 border-[#00A3A8] text-[#00A3A8]"}>Account Statement</Button>
          </div>

          {activeTab === "information" ? (
            <>
              <Card className="border-2 border-[#00A3A8] p-4 space-y-3">
                <div>
                  <Label.Root className="text-gray-500 text-xs">Gold Balance</Label.Root>
                  <p className="text-2xl font-semibold text-gray-800">500 grams</p>
                  <p className="text-sm text-gray-500">Rp681.000.000</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-gray-50 rounded-md p-2"><Label.Root className="text-[10px] text-gray-400">Status NPWP</Label.Root><p className="text-xs font-medium text-green-600 flex items-center gap-1 mt-1"><Check className="w-3.5 h-3.5" /> Verified</p></div>
                  <div className="flex-1 bg-gray-50 rounded-md p-2"><Label.Root className="text-[10px] text-gray-400">Potensi Keuntungan</Label.Root><p className="text-xs font-medium mt-1">Rp2.270.000 <span className="text-green-600">5.1%</span></p></div>
                </div>
              </Card>
              <div className="flex gap-2">
                <Card className="flex-1 border-2 border-amber-400 p-3"><Label.Root className="text-[10px] text-gray-500">Buying Price (/gram)</Label.Root><p className="text-sm font-medium text-amber-500 mt-1">Rp2.270.000</p></Card>
                <Card className="flex-1 border-2 border-[#00A3A8] p-3"><Label.Root className="text-[10px] text-gray-500">Selling Price (/gram)</Label.Root><p className="text-sm font-medium text-[#00A3A8] mt-1">Rp2.270.000</p></Card>
              </div>
              <p className="text-[10px] text-gray-400">Terakhir diperbarui: 22/12/2025 10:05:00</p>
              <div className="space-y-3">
                <Label.Root className="text-gray-800 font-medium text-sm">Gold Portofolio</Label.Root>
                <Card className="p-4 space-y-2.5">
                  <PortfolioRow label="Nomor Akun" value="880707070707" />
                  <PortfolioRow label="Total Gram" value="500" strong />
                  <PortfolioRow label="Rata-rata Harga Beli" value="Rp2.100.000/gram" />
                  <PortfolioRow label="Total IDR" value="Rp954.820.000" />
                  <PortfolioRow label="Total Harga Jual" value="Rp955.820.000" last />
                  <Button onClick={() => setActiveTab("statement")} className="w-full h-8 text-xs bg-white border-2 border-[#00A3A8] text-[#00A3A8] mt-2">Lihat Statement</Button>
                </Card>
              </div>
            </>
          ) : (
            <div className="space-y-1">
              <Label.Root className="text-gray-800 font-medium text-sm">Riwayat Transaksi Emas</Label.Root>
              <Card className="p-0 overflow-hidden">
                <div className="grid grid-cols-3 gap-2 px-4 py-2.5 bg-gray-50 text-[10px] font-medium text-gray-500"><span>Tanggal</span><span className="text-right">Beli (Rp)</span><span className="text-right">Gram</span></div>
                {orderHistory.map((row, i) => (
                  <div key={row.date + i} className={`grid grid-cols-3 gap-2 px-4 py-2.5 text-xs ${i !== orderHistory.length - 1 ? "border-b border-gray-100" : ""}`}>
                    <span className="text-gray-700">{row.date}</span>
                    <span className="text-right text-gray-800">Rp{row.amount.toLocaleString("id-ID")}</span>
                    <span className="text-right font-medium text-[#00A3A8]">{row.grams} gram</span>
                  </div>
                ))}
              </Card>
            </div>
          )}
        </div>
      </div>
    )
}

function PortfolioRow({ label, value, strong, last }: { label: string; value: string; strong?: boolean; last?: boolean; }) {
  return <div className={`flex justify-between text-xs ${!last ? "pb-2 border-b border-gray-100" : ""}`}><span className="text-gray-500">{label}</span><span className={strong ? "font-semibold text-gray-800" : "text-gray-700"}>{value}</span></div>
}