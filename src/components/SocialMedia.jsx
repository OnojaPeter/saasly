import Button from "./Button"

const socialDetails = [
    {
        name: 'Facebook',
        bgColor: 'bg-[#006EEA]',
        icon: 'facebook.png'
    },
    {
        name: 'Twitter',
        bgColor: 'bg-[#0298EB]',
        icon: 'twitter.png'
    },
    {
        name: 'Facebook',
        bgColor: 'bg-[#E95C49]',
        icon: 'google.png'
    }
]

const SocialMedia = () => {
  return (
    <section className="">
        <div className="space-y-14 lg:space-y-16">
            <div className=" ">
                <h2 className="text-white text-[32px] md:text-5xl font-bold text-center">
                    Integrated with Social Media
                </h2>
            </div>

            <div className="flex flex-col items-center lg:flex-row gap-4 ">
                {socialDetails.map((social, index) => {
                    return (
                        <div key={index} className="bg-white relative overflow-hidden sm:max-w-[384px] lg:max-w-[284px] rounded-[10px]">
                            <div className="absolute  ">
                                <img src="/images/social-pattern.png" alt="" />
                            </div>

                            <div className="relative  space-y-12  p-6">                               
                                <div className="flex flex-col gap-y-6 items-center text-center">
                                    <div className={`${social.bgColor} rounded-[10px] p-2 flex justify-center items-center`}>
                                        <img className="w-12 h-12" src={`/images/${social.icon}`} alt="" />
                                    </div>

                                    <div>
                                        <h4 className="text-2xl text-[#006fba] font-bold">{social.name}</h4>
                                        <p className="text-[#68718b]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vero a </p>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col items-center text-white">
                                    <Button text='Learn More' style='bg-gradient-to-br from-[#6a36ff] to-[#ac5fe6]' />
                                </div>
                                
                            </div>
                        </div>
                    )
                })}
                
                
                
            </div>
        </div>
    </section>
  )
}

export default SocialMedia