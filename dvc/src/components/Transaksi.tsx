"use client";

import { Bold, TrendingUp } from "lucide-react";
import {
AreaChart,
Area,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer, CartesianGrid, Scatter, LabelList} from "recharts"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Menu, Lock, LogOut, Calendar } from "lucide-react"


function Transaksi() {
 
const transaksiData = [
{ day: "06 Jan", value: 800000 },
{ day: "07 Jan", value: 0 },
{ day: "08 Jan", value: 400000 },
{ day: "09 Jan", value: 1200000 },
{ day: "10 Jan", value: 1600000 },
{ day: "11 Jan", value: 0 },
{ day: "12 Jan", value: 0 },
]

const tabungData = [
{ day: "06 Jan", value: 50 },
{ day: "07 Jan", value: 0 },
{ day: "08 Jan", value: 25 },
{ day: "09 Jan", value: 75 },
{ day: "10 Jan", value: 100 },
{ day: "11 Jan", value: 0 },
{ day: "12 Jan", value: 0 },
]
 
  return (
  <>
  <p className="font-semibold mb-2">Transaksi 7 Hari Terakhir</p>
   <Card className="rounded-xs shadow-xl ">
<CardContent className="">
<div className="h-48">
<ResponsiveContainer width="100%" height="100%">

<AreaChart data={transaksiData}>
<CartesianGrid  horizontal={false} stroke="#e5e7eb"/>
<XAxis dataKey="day" fontSize={8} />
<YAxis hide fontSize={8}/>

<Tooltip formatter={(v) => `Rp. ${Number(v).toLocaleString()}`} />

  <Area
    type="linear"
    dataKey="value"
    stroke="#2bb0a6"
    fill="#bfe9e5"
    strokeWidth={3}
    dot={{ r: 2 }}
  >
   <LabelList dataKey="value"
      position="right"
      formatter={(v) => `Rp. ${Number(v).toLocaleString()}`}
      
      className="font-semibold fill-[#003C3C]" fontSize={8}>

   </LabelList>
  </Area>
</AreaChart>
</ResponsiveContainer>
</div>
<p className="text-xs mt-2 text-teal-700">■ Sales Volume</p>
</CardContent>
</Card>

<div className="">
<Card className="rounded-xs shadow-xl ">
<CardContent className="">
<div className="h-48">
<ResponsiveContainer className={``} width="100%" height="100%">

<AreaChart data={tabungData}>
<CartesianGrid  horizontal={false} />
<XAxis dataKey="day" fontSize={8} />
<YAxis hide />

<Tooltip formatter={(v) => ` ${Number(v).toLocaleString()}`} />

  <Area
    type="linear"
    dataKey="value"
    stroke="#F79B14"
    fill="#FFE2B8"
    strokeWidth={3}
    dot={{ r: 2 }}
  >
   <LabelList dataKey="value"
      position="right"
      formatter={(v) => ` ${Number(v).toLocaleString()}`}
      
      className="font-semibold fill-[#003C3C]" fontSize={8}>

   </LabelList>
  </Area>
</AreaChart>
</ResponsiveContainer>
</div>
<p className="text-xs mt-2 text-[#F79B14]">■ Jumlah Tabung</p>
</CardContent>
</Card>

</div>

</>
  );
  
}




export default Transaksi;