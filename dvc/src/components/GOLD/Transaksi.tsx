"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from "recharts"
import { Card, CardContent } from "@/components/ui/card";

function TransaksiGold() {
  const transaksiData = [
    { day: "06 Jan", value: 227000000 },
    { day: "07 Jan", value: 0 },
    { day: "08 Jan", value: 68100000 },
    { day: "09 Jan", value: 340500000 },
    { day: "10 Jan", value: 45400000 },
    { day: "11 Jan", value: 0 },
    { day: "12 Jan", value: 227000000 },
  ];

  const emasData = [
    { day: "06 Jan", value: 100 },
    { day: "07 Jan", value: 0 },
    { day: "08 Jan", value: 30 },
    { day: "09 Jan", value: 150 },
    { day: "10 Jan", value: 20 },
    { day: "11 Jan", value: 0 },
    { day: "12 Jan", value: 100 },
  ];

  return (
    <>
      <p className="font-semibold mb-2">Transaksi Emas 7 Hari Terakhir</p>
      <Card className="rounded-xs shadow-xl">
        <CardContent>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={transaksiData}>
                <CartesianGrid horizontal={false} stroke="#e5e7eb"/>
                <XAxis dataKey="day" fontSize={8} />
                <YAxis hide fontSize={8}/>
                <Tooltip formatter={(v) => `Rp. ${Number(v).toLocaleString("id-ID")}`} />
                <Area type="linear" dataKey="value" stroke="#2bb0a6" fill="#bfe9e5" strokeWidth={3} dot={{ r: 2 }}>
                  <LabelList dataKey="value" position="right" formatter={(v) => `Rp. ${Number(v).toLocaleString("id-ID")}`} className="font-semibold fill-[#003C3C]" fontSize={8}/>
                </Area>
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs mt-2 text-teal-700">Sales Volume Emas</p>
        </CardContent>
      </Card>

      <Card className="rounded-xs shadow-xl">
        <CardContent>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={emasData}>
                <CartesianGrid horizontal={false} />
                <XAxis dataKey="day" fontSize={8} />
                <YAxis hide />
                <Tooltip formatter={(v) => `${Number(v).toLocaleString("id-ID")} gram`} />
                <Area type="linear" dataKey="value" stroke="#F79B14" fill="#FFE2B8" strokeWidth={3} dot={{ r: 2 }}>
                  <LabelList dataKey="value" position="right" formatter={(v) => `${Number(v).toLocaleString("id-ID")} gr`} className="font-semibold fill-[#003C3C]" fontSize={8}/>
                </Area>
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs mt-2 text-[#F79B14]">Jumlah Emas (gram)</p>
        </CardContent>
      </Card>
    </>
  );
}

export default TransaksiGold;