"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { Line } from "recharts";

export default function Tenor() {
    const [tenor, setTenor] = useState(30);

    const increment = () => {
        if (tenor < 90) setTenor(tenor + 1)
    }
    
     const decrement = () => {
        if (tenor > 1) setTenor(tenor - 1)
    }

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between ">
              <h1 className="text-sm text-muted-foreground ">
                Tenor
            </h1>
            <h1 className="">{tenor} Hari</h1>
            </div>
            <div className="flex items-center gap-4">
               <div className="rounded-md shadow-lg  bg-linear-to-r from-[#37b7b2] to-gray-200  flex items-center px-4 ">
                 <button onClick={decrement}  className="text-[#096D69] pb-2 pt-2 pr-5 ">
                  <Minus className="w-5 h-5"/>
                  </button>
                  <div className="bg-white rounded px-8  text-[16px] font-semibold text-gray-500">{tenor} Hari</div>
                  <button onClick={increment}  className="text-[#096D69] pb-2 pt-2 pl-5 ">
                  <Plus className="w-5 h-5 "/>
                  </button>
               </div>
            </div>
            <div className="flex items-center gap-4 w-58">
          <div className="flex-1 border-t border-gray-300" />
            <p className="text-sm text-muted-foreground ">Maksimal 90 Hari</p>
          <div className="flex-1 border-t border-gray-300" />
</div>
        </div>
    )
}