'use client';
import Image from 'next/image'
import {Menu} from "lucide-react";
 
export default function Navbar({onOpen} : {onOpen: () => void}) {
  return (
    <div className="absolute top-4 left-4 ">
    <button onClick={onOpen} className='p-2 rounded-md hover:bg-gray-100'>
      <Menu size={24} className='text-[#00A3A8]' />
    </button>
    </div>
  )
}