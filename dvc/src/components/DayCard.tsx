"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Menu, Lock, LogOut, Calendar } from "lucide-react"


function DayCard() {
  const [currentDate, setCurrentDate] = useState(new Date());

 
  const daysData = [
    {
      day: "Senin",
      date: "2026-02-09", 
      count: 200,
      label: "Tabung",
      status: "success",
    },
    {
      day: "Selasa",
      date: "2026-02-10",
      count: 156,
      label: "Tabung",
      status: "success",
    },
    {
      day: "Rabu",
      date: "2026-02-11",
      count: 80,
      label: "Tabung",
      status: "success",
    },
    {
      day: "Kamis",
      date: "2026-02-12", 
      count: 0,
      label: "Tabung",
      status: "error",
    },
    {
      day: "Jumat",
      date: "2026-02-13",
      count: 178,
      label: "Tabung",
      status: "success",
    },
  ];

 const dayMap: Record <number, string> = {
    0: "Minggu",
    1: "Senin",
    2: "Selasa",
    3: "Rabu",
    4: "Kamis",
    5: "Jumat",
    6: "Sabtu",
 };

const isTodayByDay = (dayName: string) => {
    const todayIndex = currentDate.getDay();
    const todayName = dayMap[todayIndex];
    return dayName === todayName; 
  };


  const isToday = (dateString: string) => {
    const itemDate = new Date(dateString);
    return (    
      itemDate.getDate() === currentDate.getDate() &&
      itemDate.getMonth() === currentDate.getMonth() &&
      itemDate.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <div className="grid grid-cols-5 mt-3 p-1 space-x-1">
      {daysData.map((item, index) => {
        const today = isTodayByDay(item.day);
        
        return (
          <div key={item.day} className="rounded-[4] shadow-md overflow-hidden bg-white text-center">
            {/* Header Hari */}
            <div  className={`font-semibold text-[9px] mb-0.5 items-center justify-center  ${today 
                ? "pr-1 pl-1  items-center bg-linear-to-r from-teal-700 to-teal-500 text-white shadow-lg scale-105" 
                : "pr-1 pl-1  bg-[#B5B5B5] text-gray-700"                 
              }`}>
              {item.day}
            </div>

            {/* Tanggal */}
            <div className="text-[6.5px] px-1 items-center mt-1.5">
              {new Date(item.date).toLocaleDateString('id-ID', {
                day: 'numeric',month: 'long', year: 'numeric'
              })}
            </div>

            {/* Angka Besar */}
            <div className="text-[15px] font-bold ">
              {item.count}
            </div>

            {/* Label */}
            <div className="text-[8px] mb-0.5 ">
              {item.label}
            </div>

            {/* Icon Status */}
            <div className="flex justify-center mb-1.5">
              {item.status === "success" ? (
                <div className={`
                  w-3 h-3 rounded-full flex items-center justify-center
                  ${today ? "bg-teal-500" : "bg-teal-400"}
                `}>
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}




export default DayCard;