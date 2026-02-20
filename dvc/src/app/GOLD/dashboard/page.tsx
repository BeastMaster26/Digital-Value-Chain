"use client";

import Body from "@/components/LPG/body-done";
import Transaksi from "@/components/LPG/transaksi-done";
import DayCard from "../../../components/LPG/day-card";
import Header from "@/components/LPG/Header"
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/LPG/sidebar-lpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import Norton from "@/components/norton";
import { pageToRoute } from "next/dist/build/utils";
import { useRouter } from "next/navigation";
import Navbar from "@/components/LPG/navbar";
import Profile from "@/components/profile";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Menu, Lock, LogOut, Calendar } from "lucide-react"
import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
} from "recharts"
import { Capsule } from "@/components/Capsule";



const lineData = [
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
export default function DashboardPage(){
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [currentDate, setCurrentDate] = useState(new Date());
    const daysData = [
    {
      day: "Senin",
      date: "2026-02-02", 
      count: 200,
      label: "Tabung",
      status: "success",
    },
    {
      day: "Selasa",
      date: "2026-02-03",
      count: 156,
      label: "Tabung",
      status: "success",
    },
    {
      day: "Rabu",
      date: "2026-02-04",
      count: 80,
      label: "Tabung",
      status: "success",
    },
    {
      day: "Kamis",
      date: "2026-02-05", 
      count: 0,
      label: "Tabung",
      status: "error",
    },
    {
      day: "Jumat",
      date: "2026-02-06",
      count: 178,
      label: "Tabung",
      status: "success",
    },
  ];

   const isToday = (dateString: string) => {
    const itemDate = new Date(dateString);
    return (
    itemDate.getDate() === currentDate.getDate() && itemDate.getMonth() === currentDate.getMonth() 
    && itemDate.getFullYear() === currentDate.getFullYear() 
    )
   }

    return (
        
       <div
      className="min-h-screen flex pt-17 justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/img/bg_tower.png')" }}
    >
      {/* overlay */}
     <Sidebar open={open} onClose={() => setOpen(false)} />
      <Logo />
      <div className="w-full max-w-md mx-auto font-sans ">
                 {/*navbar*/}
                  <Navbar onOpen={() => setOpen(true)} />
              <CardContent className="flex flex-col gap-6 ">

    {/*headers*/}
     <Header />
    
    {/*Body*/}
            <Card className="rounded-xs shadow mb-4 bg-white/70 backdrop-blur-md border-none ">
        <CardContent className="px-4 ">
        <Body />
   <div className="space-y-4">
  <DayCard />
  <Transaksi />
</div>
</CardContent>
</Card>
</CardContent>
<h1 className="text-[10px] text-gray-800 text-center mb-5 ">PT Bank Syariah Indonesia, Tbk. adalah pelaku jasa keuangan berizin dan diawasi oleh Otoritas Jasa Keuangan serta merupakan peserta penjamin LPS
@2021 Bank Syariah Indonesia BSI CALL 1500789 - www.bankbsi.co.id - tsc@bankbsi.co.id</h1>      
</div>
    </div>
    );
}