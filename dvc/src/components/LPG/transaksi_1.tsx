"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";
import ConfirmDialog from "@/components/ConfirmDialog";

export default function transaksi_user() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    router.push("/LPG/dashboard"); // Arahkan ke dashboard
  };

  return (
    <main className="min-h-screen bg-gray-100">


      <div className="bg-white rounded-t-3xl p-5 -mt-4 text-black">
        <label>Sumber Dana</label>
        <select className="border rounded w-full p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
          <option>Kartu BSI</option>
        </select>

        <label className="mt-4 block text-black">Jumlah Transfer</label>
        <input
          className="border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          defaultValue="50.000"
        />

        <label className="mt-4 block text-black">Nomor Kartu BSI Sumber</label>
        <div className="flex gap-2">
          <input
            className="border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            defaultValue="832211234556880"
          />
          <button className="bg-teal-500 text-white px-4 rounded">
            Scan
          </button>
        </div>

        <label className="mt-4 block">Nomor Rekening Tujuan</label>
        <input
          className="border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          defaultValue="832211234565881"
        />

        <label className="mt-4 block">Catatan</label>
        <input
          className="border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent "
          placeholder="Tambahkan Catatan"
        />

        <button
          onClick={() => setOpen(true)}
          className="mt-10 w-full bg-amber-500 rounded-lg text-white py-3"
        >
          Submit
        </button>
      </div>

      <ConfirmDialog
        open={open}
        onClose={handleClose}
      />
    </main>
  );
}