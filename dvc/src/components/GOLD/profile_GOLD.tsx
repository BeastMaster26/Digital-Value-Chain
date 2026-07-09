import Image from 'next/image'
import Link from 'next/link'
 
export default function ProfileGold() {
  return (
    <Link href="/GOLD/user-management" aria-label="Buka Profil Gold Saya" className="block rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
      <Image
        src="/img/pfp.png"
        width={50}
        height={50}
        alt="Gold user profile"
      />
    </Link>
  )
}