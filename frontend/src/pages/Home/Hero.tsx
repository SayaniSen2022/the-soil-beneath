import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className='relative'>
      <img 
        src="/images/Plant-banner.webp" 
        alt="hero-banner" 
        className='h-[660px] w-full md:h-full lg:h-full object-cover'
      />
      <div className="absolute left-5 top-[24.5rem] md:top-1/2 lg:top-1/2 -translate-y-1/2 text-white z-10 text-left">
        <div className='text-8xl text-wrap w-64 pb-2 font-medium'>Grow Better, Live Greener</div>
        <Link to="/products">
          <button className='mt-4 font-thin text-amber-900 bg-amber-200 rounded-lg py-2 px-4 text-2xl hover:bg-amber-400 duration-300 ease-in-out'>Shop Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero