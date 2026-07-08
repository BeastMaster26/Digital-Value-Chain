"use client";

import { useState } from "react";
import { Check, ShieldCheck, UserRound } from "lucide-react";
import { Card } from "../ui/card";
import { Label } from "radix-ui";
import { Button } from "../ui/button";

type Tab = "profile" | "users";

const userInfo = {
    name: "Ahmad Fauzi",
    role: "Pemilik Agen LPG",
    userId: "USR-LPG-001274",
    phone: "0812-3456-7890",
    email: "ahmad.fauzi@bewize.co.id",
    branch: "BSI KC Jakarta Sudirman",
    status: "Aktif",
    verifiedAt: "22/12/2025 10:05:00",
};

const users = [
    { name: "Ahmad Fauzi", role: "Owner", phone: "0812-3456-7890", status: "Aktif" },
    { name: "Siti Aminah", role: "Admin Operasional", phone: "0813-2222-8899", status: "Aktif" },
    { name: "Budi Santoso", role: "Staf Gudang", phone: "0815-7788-1000", status: "Aktif" },
    { name: "Rina Lestari", role: "Kasir", phone: "0821-9988-7766", status: "Menunggu" },
];

export default function User() {
    const [activeTab, setActiveTab] = useState<Tab>("profile");

    return (
        <>
        <div className="max-w-md mx-auto bg-white">
            <div className="px-4 pt-3 pb-6 space-y-4">
                <div className="flex gap-2">
                    <Button
                        onClick={() => setActiveTab("profile")}
                        className={
                            activeTab === "profile"
                                ? "flex-1 h-9 text-xs bg-linear-to-r from-teal-700 to-teal-500 text-white"
                                : "flex-1 h-9 text-xs bg-white border-2 border-[#00A3A8] text-[#00A3A8]"
                        }
                    >
                        Informasi User
                    </Button>
                    <Button
                        onClick={() => setActiveTab("users")}
                        className={
                            activeTab === "users"
                                ? "flex-1 h-9 text-xs bg-linear-to-r from-teal-700 to-teal-500 text-white"
                                : "flex-1 h-9 text-xs bg-white border-2 border-[#00A3A8] text-[#00A3A8]"
                        }
                    >
                        Daftar User
                    </Button>
                </div>

                {activeTab === "profile" ? (
                    <>
                        <Card className="border-2 border-[#00A3A8] p-4 space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
                                    <UserRound className="w-6 h-6 text-[#00A3A8]" />
                                </div>
                                <div className="flex-1">
                                    <Label.Root className="text-gray-500 text-xs">Nama User</Label.Root>
                                    <p className="text-xl font-semibold text-gray-800">{userInfo.name}</p>
                                    <p className="text-sm text-gray-500">{userInfo.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div className="flex-1 bg-gray-50 rounded-md p-2">
                                    <Label.Root className="text-[10px] text-gray-400">Status User</Label.Root>
                                    <p className="text-xs font-medium text-green-600 flex items-center gap-1 mt-1">
                                        <Check className="w-3.5 h-3.5" /> {userInfo.status}
                                    </p>
                                </div>
                                <div className="flex-1 bg-gray-50 rounded-md p-2">
                                    <Label.Root className="text-[10px] text-gray-400">Verifikasi</Label.Root>
                                    <p className="text-xs font-medium text-green-600 flex items-center gap-1 mt-1">
                                        <ShieldCheck className="w-3.5 h-3.5" /> Terverifikasi
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <div className="space-y-3">
                            <Label.Root className="text-gray-800 font-medium text-sm">Detail User</Label.Root>

                            <Card className="p-4 space-y-2.5">
                                <InfoRow label="User ID" value={userInfo.userId} strong />
                                <InfoRow label="Nomor HP" value={userInfo.phone} />
                                <InfoRow label="Email" value={userInfo.email} />
                                <InfoRow label="Cabang" value={userInfo.branch} />
                                <InfoRow label="Terakhir diverifikasi" value={userInfo.verifiedAt} last />

                                <Button
                                    onClick={() => setActiveTab("users")}
                                    className="w-full h-8 text-xs bg-white border-2 border-[#00A3A8] text-[#00A3A8] mt-2"
                                >
                                    Lihat Daftar User
                                </Button>
                            </Card>
                        </div>
                    </>
                ) : (
                    <div className="space-y-3">
                        <Label.Root className="text-gray-800 font-medium text-sm">Daftar User Terdaftar</Label.Root>

                        <Card className="p-0 overflow-hidden">
                            <div className="grid grid-cols-[1.2fr_1fr_0.7fr] gap-2 px-4 py-2.5 bg-gray-50 text-[10px] font-medium text-gray-500">
                                <span>Nama</span>
                                <span>Role</span>
                                <span className="text-right">Status</span>
                            </div>
                            {users.map((row, i) => (
                                <div
                                    key={row.phone}
                                    className={`grid grid-cols-[1.2fr_1fr_0.7fr] gap-2 px-4 py-2.5 text-xs ${
                                        i !== users.length - 1 ? "border-b border-gray-100" : ""
                                    }`}
                                >
                                    <div>
                                        <p className="font-medium text-gray-800">{row.name}</p>
                                        <p className="text-[10px] text-gray-500">{row.phone}</p>
                                    </div>
                                    <span className="text-gray-700">{row.role}</span>
                                    <span className={`text-right font-medium ${
                                        row.status === "Aktif" ? "text-green-600" : "text-amber-500"
                                    }`}>
                                        {row.status}
                                    </span>
                                </div>
                            ))}
                        </Card>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

function InfoRow({
    label,
    value,
    strong,
    last,
}: {
    label: string;
    value: string;
    strong?: boolean;
    last?: boolean;
}) {
    return (
        <div className={`flex justify-between gap-4 text-xs ${!last ? "pb-2 border-b border-gray-100" : ""}`}>
            <span className="text-gray-500">{label}</span>
            <span className={strong ? "font-semibold text-gray-800 text-right" : "text-gray-700 text-right"}>{value}</span>
        </div>
    )
}
