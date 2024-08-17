import Button from "./Button"
import CompanyLogo from "./CompanyLogo"

const Hero = () => {
  return (
    <section className="space-y-14 md:space-y-[120px] py-16 md:py-20">
        <div className="md:mx-[42px]  text-white">
            <div className="space-y-12">
                <div className="md:mx-[20px] lg:mx-0 xl:mx-[128.5px] space-y-8 md:space-y-12">
                    <div className="space-y-4 md:space-y-6">
                        <h1 className="text-[40px] md:text-6xl lg:text-6xl text-center font-bold">Advanced analytics to grow your business</h1>

                        <p className="sm:mx-[80px] xl:mx-[148.5px] text-center text-lg text-[#E6E8EC]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Diam ut id nisl tellus rhoncus, imperdiet
                        </p>
                    </div>
                    

                    <div className="flex flex-col sm:flex-row justify-center gap-y-3 gap-x-4">
                        <Button text='Start Now' style='bg-gradient-to-br from-[#6a36ff] to-[#ac5fe6]' />
                        <Button text='Trial' style='border-[1px]' icon='/images/arrow-right.png' />
                    </div>
                </div>
                
                

                <div className="w-full rounded-xl overflow-hidden shadow-xl md:shadow-2xl">
                    <img className="md:block hidden w-full" src="/images/web-dashboard-illustration.webp" alt="dashboard" />
                    <img className="block md:hidden w-full" src="/images/mobile-dashboard-illustration.webp" alt="dashboard" />
                </div>
            </div>
            
        </div>
        <CompanyLogo />
    </section>
  )
}

export default Hero