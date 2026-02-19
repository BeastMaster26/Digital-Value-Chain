import Image from 'next/image'
 
export default function Logo_side() {
  return (
    <div className="absolute top-3 left-6">
    <Image
      src="/img/logo3.png"
      width={90}
      height={90}
      alt="Picture of the author"
    />
    </div>
  )
}