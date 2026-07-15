import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText } from "lucide-react"

export default function DocumentCard() {
  return (
    <Card className="p-4">
      <div className="flex gap-3">
        <FileText />
        <div>
          <h3 className="font-medium">
            Dokumen SKB.pdf
          </h3>
          <p className="text-xs text-gray-500">
            2 KB
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <Button size="sm" variant="outline">
          Preview
        </Button>
        <Button size="sm">
          Ubah
        </Button>
        <Button size="sm" variant="destructive">
          Hapus
        </Button>
      </div>
    </Card>
  )
}