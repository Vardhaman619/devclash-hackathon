import Image from 'next/image'
import HeroImage from '~/assets/images/hero-image.jpeg'

export default function IndexPage(){
  return (
      <main>
        <section className='bg-black py-8 '>
          <div className='container mx-auto flex flex-col gap-y-4'>

          <form action="" className='bg-white max-w-screen-lg mx-auto w-full p-4 rounded-full'>
            <input type="text" />
          </form>
          <div className='relative'>
          <Image src={HeroImage} alt="Hero Image" className="container mx-auto rounded overflow-hidden" width={1920} height={1080}/>
          <div>
            <p>Not sure where to go? Perfect.</p>
            <button >Show Me Some Ideas</button>
          </div>
          </div>
          </div>
        </section>
        {/* Hero Section */}
        {/* Recommendation Section */}
      </main>
     
  )
}