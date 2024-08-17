import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhySaasly from "./components/WhySaasly"
import Features from "./components/Features"
import SocialMedia from "./components/SocialMedia"
import Article from "./components/Article"
import Cta from "./components/Cta"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="bg-white  relative">
          <img className="absolute hidden lg:block w-full h-[806px]" src="/images/backgroundhero.webp" alt="" />
          <img className="absolute lg:hidden w-full h-[806px]" src="/images/mobile-background-hero.webp" alt="" />
          
          <div className='z-10 relative max-w-[1440px] mx-auto'>
            <div className="mx-5 md:mx-12 lg:mx-24 xl:mx-[170px]">
              <Navbar />
              <Hero />
              <WhySaasly />
              <Features />
            </div>           
          </div>  

          <div className="flex flex-col justify-center relative h-[1664px] lg:h-[1050px]">
            <img className="absolute hidden lg:block w-full h-[1050px]" src="/images/backgroundintegrations.webp" alt="" />
            <img className="absolute lg:hidden w-full h-[1664px]" src="/images/backgroundintegrationsmobile.webp" alt="" />
            <div className='z-10 relative max-w-[1440px] mx-auto'>
              <div className="mx-5 md:mx-12 lg:mx-24 xl:mx-[170px]">
                <SocialMedia />
              </div>           
            </div> 
          </div>

          <div className='z-10 relative max-w-[1440px] mx-auto'>
            <div className="mx-5 md:mx-12 lg:mx-24 xl:mx-[170px]">
              <Article />
            </div>           
          </div>

          <div className="bg-[#ebf7ff] relative ">
           
            
            <img className="absolute hidden md:block w-full h-[1050px] top-[230px]" src="/images/backgroundfooter.webp" alt="" />
            <img className="absolute md:hidden w-full h-[1000px] top-[450px] sm:top-[400px] lg:top-[500px]" src="/images/backgoundfootermobile.webp" alt="" />
            
            <div className='z-10 relative max-w-[1440px] mx-auto'>
              <div className="mx-5 md:mx-12 lg:mx-24 xl:mx-[170px] relative z-10">
                <Cta />
                <Footer />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App