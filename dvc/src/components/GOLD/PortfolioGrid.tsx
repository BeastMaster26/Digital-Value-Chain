import PortfolioCard from "./PortfolioCard"

export default function PortfolioGrid() {
  return (
    <section className="grid grid-cols-2 gap-3">
      <PortfolioCard
        title="Total Gram"
        value="500" />
      <PortfolioCard
        title="Rata-rata Harga Beli"
        value="Rp2.100.000/gram" />
    </section>
  )
}