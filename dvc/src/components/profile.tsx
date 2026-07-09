import Image from 'next/image'
import Link from 'next/link'
 
export default function Profile() {
  return (
    <Link href="/LPG/user-management" aria-label="Buka Profil Saya" className="block rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
      <Image
        src="/img/pfp.png"
        width={50}
        height={50}
        alt="User profile"
      />
    </Link>
  )
}
