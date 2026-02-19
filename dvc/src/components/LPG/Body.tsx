"use client";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/LPG/sidebar_LPG";

import Logo from "@/components/logo";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Navbar from "@/components/LPG/navbar";
import Profile from "@/components/profile";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Menu, Lock, LogOut, Calendar } from "lucide-react"

export default function Body(){
    const [open, setOpen] = useState(false);
    const router = useRouter();
    return (
        
  <div className="flex justify-between items-center  ">
        <div>
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <p className="text-sm font-bold mt-3">Sisa Kuota</p>
        </div>
        <Button size="sm" variant="outline" className="text-xs ">
        <Calendar className="w-3 h-3 mr-1" /> 1 Bulan Kedepan
        </Button>
        </div>
    );
}

