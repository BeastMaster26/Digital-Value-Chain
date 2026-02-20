"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "../logo";
import Norton from "../norton";
import { pageToRoute } from "next/dist/build/utils";
import { useRouter } from "next/navigation";



 function LoginForm() {
    const router = useRouter();

    return (
        <div className="w-full max-w-md mx-auto font-sans">
        <CardContent className="flex flex-col gap-6 ">
            {/*headers*/}
            <div className="flex flex-col gap-1 ">
                
                    <p className="text-2xl text-gray-500">Selamat Datang Di</p>
                    <h1 className="text-3xl font-bold text-[#00A3A8]">
                        Digital Value Chain
                    </h1>
                    <p className="text-3xl font-bold text-[#00A3A8]">
                        Bank Syariah Indonesia
                    </p>
            </div>

            {/* Form */}
        <div className=" space-y-4 text-sm text-gray-700">
            <input className="w-full border-b border-gray-500 bg-transparent outline-none py-2" placeholder="Company Code" />
          <input className="w-full border-b border-gray-500 bg-transparent outline-none py-2" placeholder="User Name" />
          <input className="w-full border-b border-gray-500 bg-transparent outline-none py-2" placeholder="Password" type="password" />

          {/* Captcha */}
      <div className="flex items-center gap-2">
            <input className="flex-1 border-b border-gray-500 bg-transparent outline-none py-2" placeholder="Captcha" />           
              <img src="/img/Captcha.png" alt="Captcha" className="w-16 h-8" />
          </div>
        </div>

        {/* Button */}
        <Button onClick={() => router.push("/LPG/dashboard")} className="w-full bg-yellow-400 hover:bg-yellow-500 shadow-md text-black font-semibold">
          Login
        </Button>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 gap-1">
         <Input className="bg-primary-foreground shadow-md" placeholder="-" />     
        </div>
        <div className="grid grid-cols-2">
            <Norton />
            <span className="text-[#00A3A8] text-xl justify-self-end">1500789</span>
        </div>
        </CardContent>
        </div>
    )
}

export default LoginForm;