"use client";

import { X } from "lucide-react";
import Logo from '@/components/logo';
import Link from "next/link";
import Logo_side from "@/components/logo_sidebar";
import { usePathname, useRouter } from "next/navigation";
import Image from 'next/image'
import { ShoppingCart } from "lucide-react";
import { Card } from "../ui/card";

export default function order() {

    const pathname = usePathname();
    const router = useRouter();

    const menuItems = [
        { label: "Buat Pesanan", path: "/LPG/transaction_management/buat_pesanan" },
        { label: "Transaksi", path: "/LPG/transaction_management/transaksi" },
    ];

    return (
        <>  
         

         <div className="">
            <div className="flex items-center justify-between p-4  ">
             
              <ShoppingCart color="#00A3A8" width={30} height={30}/>
              <h2 className="absolute left-18 font-semibold text-[#00A3A8]">Purchase Order</h2>
             
            </div>
            <Card className="bg-linear-to-r from-[#2D9793] to-gray-200">
            <nav className="px-4 space-y-4">
                     {menuItems.map((item) => (
                    <MenuItem 
                        key={item.path}
                        label={item.label} 
                        path={item.path}
                        isActive={pathname === item.path}

                    />
                ))}
            </nav>
            </Card>
         </div>
        </>
    )
}


function MenuItem({ 
    isActive,
    path,
    label,
}: { 
    label: string;
    path: string;
    isActive?: boolean;
}) {
  return (
    <Link 
      href={path}
      
      className={`
        w-full flex items-center justify-between
        px-4 py-3 rounded-md transition-colors
        ${isActive 
            ? "bg-teal-700  text-white" 
            : "bg-linear-to-r from-teal-700 to-teal-500 text-white "
        }
      `}
    >
      {label}
      <span className="text-2xl">›</span>
    </Link>
  );
}