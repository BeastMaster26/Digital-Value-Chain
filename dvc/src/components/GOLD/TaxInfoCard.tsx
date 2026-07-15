import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function TaxInfoCard() {
  return (
    <Card className="p-4">
      <p className="text-xs text-gray-500">
        Status Dokumen
      </p>
      <Badge variant="outline" className="mt-2">Belum Terverifikasi</Badge>
    </Card>
  )
}