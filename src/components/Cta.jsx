import Button from "./Button"

const Cta = () => {
  return (
    <section className=' pt-14 lg:pt-16 pb-60'>
        <div className='space-y-10 lg:space-y-12'>
            <div className="md:mx-[100px] space-y-6">
                <h2 className="text-[#14358A] text-[32px] md:text-5xl font-bold text-center">
                    Lets start growing your business
                </h2>

                <p className="sm:mx-[80px] xl:mx-[125.5px] text-center text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam ut id nisl tellus rhoncus, imperdiet
                </p>              
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-y-4 gap-x-6">
                <Button text='Register Now' style='bg-gradient-to-br from-[#6a36ff] to-[#ac5fe6] text-white' />
                <Button text='Contact Us' style='border-[1px] border-black'/>
            </div>
        </div>
    </section>
  )
}

export default Cta