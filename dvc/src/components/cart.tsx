 import Image from 'next/image'
  
 export default function Cart() {
   return (
    <div className="flex items-center justify-between p-4  ">
        <div className="text-9xl">
              <Image
                    src="/img/cart.png"
                    width={50}
                    height={30}
                    alt="Picture of the author"
                    />

                </div>
            </div>
   )
 }
 
 