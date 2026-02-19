"use client";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/sidebar_LPG";

import Logo from "@/components/logo";
import { Capsule } from "./Capsule";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Profile from "@/components/profile";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Menu, Lock, LogOut, Calendar } from "lucide-react"

export default function Header(){
    const [open, setOpen] = useState(false);
    const router = useRouter();
    return (
        
      <Card className="rounded-xs shadow-lg mb-2 sticky top-0 z-40">
<CardContent className="px-6 flex items-center justify-between">
    <div className="flex items-center gap-3">
        <div className="flex items-center justify-center text-white font-bold">
        <Profile />
    </div>
<div>
    <p className="font-semibold text-sm text-[#00A3A8]">DBW01</p>
    <p className="text-xs text-[#F8C65F]">TOKO DBW</p>
</div>
    </div>
<div className="h-5 w-5">
    <Separator className="bg-black" orientation={'vertical'}/>
</div>

<div className="flex items-center gap-3">
        <Lock className="w-4 h-4 text-teal-600" />
    <div>
         <Capsule />
    </div>
        <LogOut className="w-4 h-4 text-teal-600" />
</div>
</CardContent>
                </Card>
    );
}