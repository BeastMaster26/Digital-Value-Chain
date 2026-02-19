import Image from 'next/image'
 
export default function Profile() {
  return (
    <div className="">
    <Image
      src="/img/pfp.png"
      width={50}
      height={50}
      alt="Picture of the author"
    />
    </div>
  )
}