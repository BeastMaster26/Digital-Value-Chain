import Image from 'next/image'
 
export default function Logo() {
  return (
    <div className="absolute top-4 right-6">
    <Image
      src="/img/logo3.png"
      width={90}
      height={90}
      alt="Picture of the author"
    />
    </div>
  )
}