"use client";

import { Button } from "../ui/button";
import { Calendar } from "lucide-react"

export default function BodyGold(){
    return (
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-2xl">Dashboard Gold</h2>
          <p className="text-sm font-bold mt-3">Saldo Emas</p>
        </div>
        <Button size="sm" variant="outline" className="rounded-xl text-xs bg-white text-gray-800 border-gray-200 shadow-sm hover:bg-amber-50 hover:text-gray-900">
          <Calendar className="w-3 h-3 mr-1 text-[#00A3A8]" /> 1 Bulan Kedepan
        </Button>
      </div>
    );
}