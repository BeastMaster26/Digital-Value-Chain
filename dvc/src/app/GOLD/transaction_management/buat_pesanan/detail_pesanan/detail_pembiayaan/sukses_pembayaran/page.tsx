"use client";

import Body from "@/components/GOLD/body-done";
import Transaksi from "@/components/GOLD/Transaksi";
import DayCard from "@/components/GOLD/DayCard";
import Header from "@/components/GOLD/Header_GOLD"
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/GOLD/sidebar_GOLD";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import Norton from "@/components/norton";
import { pageToRoute } from "next/dist/build/utils";
import { useRouter } from "next/navigation";
import Navbar from "@/components/GOLD/navbar_GOLD";
import Profile from "@/components/profile";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Pembiayaan from "@/components/GOLD/pembiayaan"; // Adjust the import path if needed
import SuksesTransaksi from "@/components/GOLD/sukses-transaksi"; // Adjust the import path if needed

const DetailPembiayaanPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex pt-17 justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/img/bg_tower.png')" }}
    >
      {/* overlay */}
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <Logo />
      <div className="w-full max-w-md mx-auto font-sans ">
        {/*navbar*/}
        <Navbar onOpen={() => setOpen(true)} />
        <CardContent className="flex flex-col ">
          {/*headers*/}
          <Header />

          {/*Body*/}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="px-0 ">
              <div className="flex justify-between items-center  ">
              </div>

             
                <SuksesTransaksi />
     
            </CardContent>
          </Card>
        </CardContent>
        <h1 className="text-[10px] text-gray-800 text-center mb-5 ">
          PT Bank Syariah Indonesia, Tbk. adalah pelaku jasa keuangan berizin dan diawasi oleh Otoritas Jasa Keuangan serta merupakan peserta penjamin LPS
          @2021 Bank Syariah Indonesia BSI CALL 1500789 - www.bankbsi.co.id - tsc@bankbsi.co.id
        </h1>
      </div>
    </div>
  );
};

export default DetailPembiayaanPage;