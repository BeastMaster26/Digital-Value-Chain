import { Card } from "@/components/ui/card"

interface Props {
  title: string
  value: string
}

export default function PortfolioCard({
  title,
  value,
}: Props) {
  return (
    <Card className="p-4">
      <p className="text-xs text-gray-500">{title}</p>
      <h3 className="font-semibold mt-2">{value}</h3>
    </Card>
  )
}