"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Capsule } from "../Capsule";
import { useRouter } from "next/navigation";
import ProfileGold from "@/components/GOLD/profile_GOLD";
import { Separator } from "@/components/ui/separator";
import { Lock, LogOut } from "lucide-react"

export default function HeaderGold(){
    const router = useRouter();
    return (
      <Card className="rounded-xs shadow-lg mb-2 sticky top-0 z-40">
        <CardContent className="px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center text-white font-bold">
              <ProfileGold />
            </div>
            <div>
              <p className="font-semibold text-sm text-[#00A3A8]">GLD01</p>
              <p className="text-xs text-[#F8C65F]">TOKO EMAS DBW</p>
            </div>
          </div>
          <div className="h-5 w-5">
            <Separator className="bg-black" orientation="vertical"/>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-teal-600" />
            <Capsule />
            <LogOut className="w-4 h-4 text-teal-600 cursor-pointer" onClick={() => router.push("/GOLD/login")}/>
          </div>
        </CardContent>
      </Card>
    );
}