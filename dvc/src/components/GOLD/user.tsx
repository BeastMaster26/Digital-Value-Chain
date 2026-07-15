"use client";

import { Check, ShieldCheck, UserRound } from "lucide-react";
import { Card } from "../ui/card";
import { Label } from "radix-ui";

const userInfo = {
    name: "Ahmad Fauzi",
    role: "Pemilik Emas",
    userId: "USR-GOLD-001274",
    phone: "0812-3456-7890",
    email: "ahmad.gold@bewize.co.id",
    branch: "BSI KC Jakarta Sudirman",
    status: "Aktif",
    verifiedAt: "22/12/2025 10:05:00",
};

export default function UserGold() {
    return (
      <div className="max-w-md mx-auto bg-white">
        <div className="px-4 pt-3 pb-6 space-y-4">
          <Card className="border-2 border-[#00A3A8] p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                <UserRound className="w-6 h-6 text-amber-500" />
              </div>
              <div className="flex-1">
                <Label.Root className="text-gray-500 text-xs">Nama User</Label.Root>
                <p className="text-xl font-semibold text-gray-800">{userInfo.name}</p>
                <p className="text-sm text-gray-500">{userInfo.role}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-50 rounded-md p-2">
                <Label.Root className="text-[10px] text-gray-400">Status Akun</Label.Root>
                <p className="text-xs font-medium text-green-600 flex items-center gap-1 mt-1">
                  <Check className="w-3.5 h-3.5" /> {userInfo.status}
                </p>
              </div>
              <div className="flex-1 bg-gray-50 rounded-md p-2">
                <Label.Root className="text-[10px] text-gray-400">Verifikasi Gold</Label.Root>
                <p className="text-xs font-medium text-green-600 flex items-center gap-1 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Terverifikasi
                </p>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            <Label.Root className="text-gray-800 font-medium text-sm">Detail Akun Saya</Label.Root>
            <Card className="p-4 space-y-2.5">
              <InfoRow label="User ID" value={userInfo.userId} strong />
              <InfoRow label="Nomor HP" value={userInfo.phone} />
              <InfoRow label="Email" value={userInfo.email} />
              <InfoRow label="Cabang" value={userInfo.branch} />
              <InfoRow label="Terakhir diverifikasi" value={userInfo.verifiedAt} last />
            </Card>
          </div>
        </div>
      </div>
    )
}

function InfoRow({ label, value, strong, last }: { label: string; value: string; strong?: boolean; last?: boolean; }) {
    return (
      <div className={`flex justify-between gap-4 text-xs ${!last ? "pb-2 border-b border-gray-100" : ""}`}>
        <span className="text-gray-500">{label}</span>
        <span className={strong ? "font-semibold text-gray-800 text-right" : "text-gray-700 text-right"}>{value}</span>
      </div>
    )
}