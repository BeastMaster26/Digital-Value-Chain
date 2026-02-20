"use client";

import Body from "@/components/lpg/Body";
import Transaksi from "@/components/lpg/Transaksi";
import DayCard from "../../../components/lpg/DayCard";
import Header from "@/components/lpg/Header"
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/lpg/sidebar-lpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import Norton from "@/components/norton";
import { pageToRoute } from "next/dist/build/utils";
import { useRouter } from "next/navigation";
import Navbar from "@/components/lpg/navbar";
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
import { Capsule } from "@/components/capsule";



export default function DashboardPage(){
    const [open, setOpen] = useState(false);
   

   

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