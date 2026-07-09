'use client';
import { Menu } from "lucide-react";
 
export default function NavbarGold({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="fixed top-4 left-4 z-50">
      <button onClick={onOpen} className="p-2 rounded-md hover:bg-gray-100" aria-label="Buka menu Gold">
        <Menu size={24} className="text-[#00A3A8]" />
      </button>
    </div>
  )
}