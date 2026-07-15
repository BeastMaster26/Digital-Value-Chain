"use client";

import { Fragment, useMemo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Check, Calendar } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex justify-between py-2 border-b border-slate-200 last:border-b-0">
      <span className="text-sm text-slate-600">{label}</span>
      <span className="text-sm font-semibold text-slate-900">{value}</span>
    </div>
  );
}

export default function BuatPesananGold() {
  const [supplier, setSupplier] = useState("");
  const [pembeli, setPembeli] = useState("");
  const [tanggalTransaksi, setTanggalTransaksi] = useState("");
  const [poNumber, setPoNumber] = useState("");
  const [hargaPerGram, setHargaPerGram] = useState("");
  const [quantity, setQuantity] = useState("");
  const [executionCode, setExecutionCode] = useState("");
  const [note, setNote] = useState("");
  const [purchaseType, setPurchaseType] = useState("investasi");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [verified, setVerified] = useState(false);
  const [otpValue, setOtpValue] = useState("");

  const numericValue = useMemo(() => {
    const price = Number(hargaPerGram.replace(/\D/g, "")) || 0;
    const qty = Number(quantity.replace(/\D/g, "")) || 0;
    return price * qty;
  }, [hargaPerGram, quantity]);

  const ppnValue = Math.round(numericValue * 0.11);
  const subtotalValue = numericValue + ppnValue;

  const formatRupiah = (value: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);

  return (
    <div className="min-h-screen py-3">
      <main className="mx-auto max-w-4xl rounded-3xl bg-white/90 p-4 shadow-xl shadow-slate-200 backdrop-blur-xl">
        <div className="space-y-4 p-4">
          <Card className="bg-gradient-to-r from-teal-600 to-cyan-400 text-white">
            <CardContent>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-teal-100">Total Pembelian</div>
                  <div className="mt-3 text-2xl font-bold">{formatRupiah(numericValue || 1453712)}</div>
                </div>
                <div className="inline-flex rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-sm shadow-slate-900/10">
                  Estimasi
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Rekening Sumber</div>
                <div className="mt-2 text-base font-semibold text-slate-900">Harian Bisnis</div>
                <div className="text-sm text-slate-500">xxxx-xxxx-xxxx</div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Rekening Tujuan</div>
                <div className="mt-2 text-base font-semibold text-slate-900">Rekening Investasi</div>
                <div className="text-sm text-slate-500">xxxx-xxxx-xxxx</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Supplier Emas</label>
                  <Input
                    value={supplier}
                    onChange={(event) => setSupplier(event.target.value)}
                    placeholder="Masukkan nama supplier emas"
                    className="border-teal-600"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Pembeli</label>
                  <Input
                    value={pembeli}
                    onChange={(event) => setPembeli(event.target.value)}
                    placeholder="Masukkan nama pembeli"
                    className="border-teal-600"
                  />
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Tanggal Transaksi</label>
                  <Input
                    value={tanggalTransaksi}
                    onChange={(event) => setTanggalTransaksi(event.target.value)}
                    placeholder="DD/MM/YYYY"
                    className="border-teal-600"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">PO No.</label>
                  <Input
                    value={poNumber}
                    onChange={(event) => setPoNumber(event.target.value)}
                    placeholder="Masukkan nomor PO emas"
                    className="border-teal-600"
                  />
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Harga Emas per Gram</label>
                  <Input
                    value={hargaPerGram}
                    onChange={(event) => setHargaPerGram(event.target.value)}
                    placeholder="Contoh: Rp2.270.000"
                    className="border-teal-600"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Quantity Gram</label>
                  <Input
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    placeholder="Masukkan jumlah gram"
                    className="border-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Kode Eksekusi</label>
                <Input
                  value={executionCode}
                  onChange={(event) => setExecutionCode(event.target.value)}
                  placeholder="Masukkan kode eksekusi"
                  className="border-teal-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Jenis Pembelian</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "investasi", label: "Investasi" },
                    { id: "fisik", label: "Fisik" },
                    { id: "hutang", label: "Pembiayaan" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setPurchaseType(option.id)}
                      className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
                        purchaseType === option.id
                          ? "border-teal-600 bg-teal-600 text-white"
                          : "border-slate-300 bg-white text-slate-700 hover:border-teal-400"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Catatan</label>
                <textarea
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="Tulis catatan singkat untuk pesanan"
                  className="w-full resize-none rounded-2xl border border-slate-300 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="px-4 pb-4">
          <Button
            onClick={() => setDrawerOpen(true)}
            className="w-full rounded-3xl bg-teal-600 py-4 text-base font-semibold text-white shadow-lg shadow-teal-200/30 hover:bg-teal-700"
          >
            Konfirmasi
          </Button>
        </div>

        <div className="space-y-4 p-4">
          <Card>
            <CardContent>
              <div className="text-sm text-slate-500">Total Pembelian</div>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">{formatRupiah(numericValue || 1453712)}</h1>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <InfoRow label="Tanggal" value={tanggalTransaksi || "18 Maret 2026"} />
              <InfoRow label="Kode" value={executionCode || "GLD-20260318-01"} />
              <InfoRow label="Catatan" value={note || "Pembelian emas investasi"} />
              <InfoRow label="PPN" value={formatRupiah(ppnValue)} />
              <InfoRow label="Subtotal" value={formatRupiah(subtotalValue || 1453712)} />
            </CardContent>
          </Card>
        </div>
      </main>

      <Transition.Root show={drawerOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setDrawerOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                        <Dialog.Title className="text-lg font-semibold text-slate-900">Verifikasi Pembelian</Dialog.Title>
                        <button
                          type="button"
                          className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200"
                          onClick={() => setDrawerOpen(false)}
                        >
                          Batal
                        </button>
                      </div>

                      <div className="flex-1 p-6">
                        {!verified ? (
                          <div className="space-y-6">
                            <p className="text-sm text-slate-600">Masukkan kode OTP 6 digit yang dikirim ke nomor terdaftar Anda untuk menyelesaikan pembelian emas.</p>
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                              <div className="mb-4 text-sm font-semibold text-slate-700">Kode OTP</div>
                              <InputOTP maxLength={6} onChange={setOtpValue}>
                                <InputOTPGroup>
                                  {[...Array(6).keys()].map((index) => (
                                    <InputOTPSlot key={index} index={index} />
                                  ))}
                                </InputOTPGroup>
                              </InputOTP>
                            </div>
                            <Button
                              onClick={() => setVerified(true)}
                              disabled={otpValue.length < 6}
                              className="w-full rounded-3xl bg-teal-600 py-4 text-base font-semibold text-white shadow-lg shadow-teal-200/30 hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                            >
                              Verifikasi
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-6">
                            <div className="rounded-3xl bg-slate-50 p-6 text-center">
                              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                                <Check className="h-8 w-8" />
                              </div>
                              <h2 className="text-2xl font-bold text-slate-900">Berhasil</h2>
                              <p className="mt-2 text-sm text-slate-600">Permohonan pembelian emas berhasil diajukan pada {tanggalTransaksi || "18 Maret 2026"}.</p>
                            </div>
                            <div className="space-y-3">
                              <Button
                                onClick={() => window.location.assign("/GOLD/transaction_management/transaksi")}
                                className="w-full rounded-3xl bg-white border border-slate-200 text-slate-900 hover:bg-slate-100"
                              >
                                Lihat Transaksi
                              </Button>
                              <Button
                                onClick={() => window.location.assign("/GOLD/dashboard")}
                                className="w-full rounded-3xl bg-teal-600 text-white hover:bg-teal-700"
                              >
                                Dashboard
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
