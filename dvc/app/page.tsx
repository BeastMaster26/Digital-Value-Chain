export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Digital Value Chain</h1>
        <div className="space-x-4">
          <a 
            href="/LPG/dashboard" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Go to LPG
          </a>
          <a 
            href="/GOLD/dashboard" 
            className="px-6 py-3 bg-yellow-600 text-white rounded-lg"
          >
            Go to GOLD
          </a>
        </div>
      </div>
    </div>
  )
}