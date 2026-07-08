"use client";

import { useState } from "react";
import { Check, ChevronRight, Menu, ExternalLink } from "lucide-react";

type Tab = "info" | "statement";

const portfolio = {
  accountNumber: "880707070707",
  totalGrams: 500,
  avgBuyingPrice: 2_100_000,
  totalIdr: 954_820_000,
  totalSellingPrice: 955_820_000,
};

function formatRupiah(value: number) {
  return "Rp" + value.toLocaleString("id-ID");
}

export default function GoldAccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>("info");

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div>
          <p className="text-sm font-medium text-neutral-900">
            Assalamu&apos;alaikum,
          </p>
          <p className="text-xs text-neutral-500">
            Selamat datang di BEWIZE by BSI
          </p>
        </div>
        <button aria-label="Buka menu" className="p-1">
          <Menu size={22} className="text-neutral-800" />
        </button>
      </header>

      <main className="max-w-md mx-auto px-4 pb-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-xs text-neutral-400 py-3">
          <span>BEWIZE Gold</span>
          <ChevronRight size={12} />
          <span>Account information</span>
          <ChevronRight size={12} />
          <span className="text-teal-700 font-medium">Gold account information</span>
        </nav>

        <h1 className="text-lg font-semibold text-neutral-900 mb-3">
          Account information
        </h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab("info")}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors ${
              activeTab === "info"
                ? "bg-teal-700 text-teal-50"
                : "bg-white border border-teal-700 text-teal-700"
            }`}
          >
            Gold acc information
          </button>
          <button
            onClick={() => setActiveTab("statement")}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-colors ${
              activeTab === "statement"
                ? "bg-teal-700 text-teal-50"
                : "bg-white border border-teal-700 text-teal-700"
            }`}
          >
            Account statement
          </button>
        </div>

        {activeTab === "info" ? (
          <>
            {/* Gold balance card */}
            <section className="bg-white border border-teal-600 rounded-xl p-4 mb-3">
              <p className="text-xs text-neutral-500 mb-1">Gold balance</p>
              <p className="text-2xl font-semibold text-neutral-900">
                500 grams
              </p>
              <p className="text-sm text-neutral-500 mb-3">
                {formatRupiah(681_000_000)}
              </p>

              <div className="flex gap-2">
                <div className="flex-1 bg-neutral-50 rounded-lg p-2.5">
                  <p className="text-[10px] text-neutral-400">Status NPWP</p>
                  <p className="text-xs font-medium text-green-700 flex items-center gap-1 mt-0.5">
                    <Check size={13} /> Verified
                  </p>
                </div>
                <div className="flex-1 bg-neutral-50 rounded-lg p-2.5">
                  <p className="text-[10px] text-neutral-400">
                    Potensi keuntungan
                  </p>
                  <p className="text-xs font-medium mt-0.5">
                    {formatRupiah(2_270_000)}{" "}
                    <span className="text-green-700">5.1%</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Buy / sell price */}
            <div className="flex gap-2 mb-1">
              <div className="flex-1 bg-white border border-amber-400 rounded-lg p-2.5">
                <p className="text-[10px] text-neutral-500">Buying (/gram)</p>
                <p className="text-sm font-medium text-amber-600 mt-1">
                  &#9679; {formatRupiah(2_270_000)}
                </p>
              </div>
              <div className="flex-1 bg-white border border-teal-600 rounded-lg p-2.5">
                <p className="text-[10px] text-neutral-500">Selling (/gram)</p>
                <p className="text-sm font-medium text-teal-700 mt-1">
                  &#9679; {formatRupiah(2_270_000)}
                </p>
              </div>
            </div>
            <p className="text-[10px] text-neutral-400 mb-5">
              Terakhir diperbarui: 22/12/2025 10:05:00
            </p>

            {/* Portfolio */}
            <h2 className="text-sm font-semibold text-neutral-900 mb-2">
              Gold portofolio
            </h2>
            <div className="bg-white border border-neutral-200 rounded-xl p-4">
              <Row label="Account number" value={portfolio.accountNumber} />
              <Row label="Total grams" value={String(portfolio.totalGrams)} strong />
              <Row
                label="Average buying price"
                value={`${formatRupiah(portfolio.avgBuyingPrice)}/gram`}
              />
              <Row label="Total IDR" value={formatRupiah(portfolio.totalIdr)} />
              <Row
                label="Total selling price"
                value={formatRupiah(portfolio.totalSellingPrice)}
                last
              />
              <button
                onClick={() => setActiveTab("statement")}
                className="w-full mt-3 border border-neutral-200 rounded-lg py-2 text-xs font-medium text-teal-700 flex items-center justify-center gap-1"
              >
                View statement <ExternalLink size={12} />
              </button>
            </div>
          </>
        ) : (
          <section className="bg-white border border-neutral-200 rounded-xl p-6 text-center text-sm text-neutral-500">
            Account statement content goes here.
          </section>
        )}
      </main>
    </div>
  );
}

function Row({
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
    <div
      className={`flex justify-between text-xs py-1.5 ${
        !last ? "border-b border-neutral-100" : ""
      }`}
    >
      <span className="text-neutral-500">{label}</span>
      <span className={strong ? "font-medium text-neutral-900" : "text-neutral-800"}>
        {value}
      </span>
    </div>
  );
}
