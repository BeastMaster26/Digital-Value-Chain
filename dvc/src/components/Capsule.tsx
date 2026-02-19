// components/LanguageToggle.tsx
"use client"

import { useState } from "react"

export function Capsule() {
  const [selectedLang, setSelectedLang] = useState<"IN" | "ENG">("IN")

  return (
    <div className="relative inline-flex items-center bg-[#4A9B8E] rounded-full p-1">
    
      <div 
        className={`absolute top-1 bottom-1 w-[calc(50%-0.4rem)] bg-[#F5A623] rounded-full transition-all duration-300 ease-in-out ${
          selectedLang === "ENG" ? "left-[calc(50%-0rem)]" : "left-1.5"
        }`}
      />
      
     
      <button
        onClick={() => setSelectedLang("IN")}
        className="relative z-10 px-2 my-0.5 rounded-full font-bold text-xs text-white transition-all duration-300 hover:opacity-80"
      >
        IN
      </button>
      
   
      <button
        onClick={() => setSelectedLang("ENG")}
        className="relative z-10 px-1.5 my-0.5 rounded-full font-bold text-xs text-white transition-all duration-300 hover:opacity-80"
      >
        ENG
      </button>
    </div>
  )
}