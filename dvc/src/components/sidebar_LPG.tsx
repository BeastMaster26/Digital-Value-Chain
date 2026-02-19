"use client";

import { X } from "lucide-react";
import Logo from '@/components/logo';
import Link from "next/link";
import Logo_side from "@/components/logo_sidebar";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Sidebar({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {

    const pathname = usePathname();
    const router = useRouter();

    const menuItems = [
        { img: "/img/back_office.png", label: "Back Office", path: "/back_office" },
        { img: "/img/dashboard.png", label: "Dashboard", path: "/LPG/dashboard" },
        { img: "/img/users.png", label: "User Management", path: "/LPG/user-management" },
        { img: "/img/transaction.png", label: "Transaction Management", path: "/LPG/transaction_management" },
    ];

    return (
        <>  
         {open && (
            <div onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50 "/>
         )}

         <aside className={`fixed rounded-r-3xl top-0 left-0 h-full w-80 bg-white z-70 font-sans font-semibold
             transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full" }`}>
            <div className="flex items-center justify-between p-4 border-b ">
                <span>
                    <Logo_side />
                </span>
                <button onClick={onClose}>
                   <X  />
                </button>
            </div>
            <nav className="p-4 space-y-4">
                     {menuItems.map((item) => (
                    <MenuItem 
                        key={item.path}
                        img={item.img}
                        label={item.label} 
                        path={item.path}
                        isActive={pathname === item.path}
                        onClose={onClose}
                    />
                ))}
            </nav>
         </aside>
        </>
    )
}


function MenuItem({ 
    img,
    label, 
    path,
    isActive,
    onClose
}: { 
    img : string;
    label: string;
    path: string;
    isActive?: boolean;
    onClose: () => void;
}) {
  return (
    <Link 
      href={path}
      onClick={onClose} // Tutup sidebar saat klik
      className={`
        w-full flex items-center justify-between
        px-4 py-3 rounded-md transition-colors
        ${isActive 
            ? "bg-teal-700  text-white" 
            : "bg-linear-to-r from-teal-700 to-teal-500 text-white hover:from-teal-500 hover:to-teal-700"
        }
      `}
    >
        <div className="flex items-center gap-3">
            {img && (
                <Image src={img} alt={label} width={50} height={24} className="w-8 h-8 object-contain bg-white rounded-full m-1 p-1"/>
            )}
        </div>

      <span>{label}</span>
      <span>›</span>
    </Link>
  );
}