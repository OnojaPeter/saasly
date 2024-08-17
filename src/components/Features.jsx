import Feature from "./Feature"

const Features = () => {
  return (
    <section className="py-16 md:py-20">
        <div className="space-y-14 md:space-y-16">
            <div className="lg:px-5 max-w-[576px] mx-auto">
                <h2 className="text-[#14358A] text-[32px] md:text-5xl font-bold text-center">
                    We make it easy to track all data analytics
                </h2>
            </div>

            <div className="space-y-14 md:space-y-16">
                <div className="gap-x-4 gap-y-9 flex flex-col-reverse lg:flex-row justify-between items-center">
                    <div className="max-w-[480px]">
                        <Feature 
                            image='timer.png'
                            heading='Real Time Data Analytics'
                            paragraph='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque '
                            text='Learn More' 
                            style='bg-gradient-to-br from-[#6a36ff] to-[#ac5fe6] text-white' 
                        />
                    </div>

                    <div className="max-w-[480px]">
                        <img src="/images/features-1.webp" alt="" />
                    </div>
                </div>

                <div className="gap-x-4 gap-y-9 flex flex-col-reverse lg:flex-row-reverse justify-between items-center">
                    <div className="max-w-[480px]">
                        <Feature 
                            image='lock.png'
                            heading='Safely Security'
                            paragraph='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque '
                            text='Learn More' 
                            style='bg-gradient-to-br from-[#6a36ff] to-[#ac5fe6] text-white' 
                        />
                    </div>

                    <div className="max-w-[480px]">
                        <img src="/images/features-2.webp" alt="" />
                    </div>
                </div>

                <div className="gap-x-4 gap-y-9 flex flex-col-reverse lg:flex-row justify-between items-center">
                    <div className="max-w-[480px]">
                        <Feature 
                            image='monitor.png'
                            heading='Multiple Platform'
                            paragraph='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque '
                            text='Learn More' 
                            style='bg-gradient-to-br from-[#6a36ff] to-[#ac5fe6] text-white' 
                        />
                    </div>

                    <div className="max-w-[480px]">
                        <img src="/images/features-3.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features