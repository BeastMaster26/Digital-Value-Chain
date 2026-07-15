import { Card } from "@/components/ui/card"

interface Props {
  label: string
  value: string
}

export default function AccountInfoCard({
  label,
  value,
}: Props) {
  return (
    <Card className="p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-medium mt-1">{value}</p>
    </Card>
  )
}