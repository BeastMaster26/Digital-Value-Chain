import { Button } from "@/components/ui/button";

export default function AccountAction() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t shadow-t-lg max-w-lg mx-auto">
      <Button className="w-full bg-teal-600 hover:bg-teal-700">
        Simpan Perubahan
      </Button>
    </div>
  )
}