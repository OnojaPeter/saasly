import Button from "./Button";
import Feature from "./Feature";



const WhySaasly = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="space-y-14 md:space-y-16">
        <div className="lg:px-5 max-w-[576px] mx-auto">
          <h2 className="text-[#14358A] text-[32px] md:text-5xl font-bold text-center">
            We optimize marketing for business continuity
          </h2>
        </div>

        <div className="space-y-12">
            <div className="mx-[71px] space-y-8 lg:space-y-0 lg:mx-0 flex items-center lg:justify-between gap-x-6 flex-col lg:flex-row">
                <div className="lg:w-52 xl:w-60 space-y-8 lg:space-y-16 my-auto">
                    <Feature 
                        image='layers.png' 
                        heading='Accurate Data Science' 
                        paragraph='Cum sociis natoque penatibus et magnis dis parturient ' 
                    />
                    <Feature 
                        image='pie-chart.png' 
                        heading='Report Automation' 
                        paragraph='Cum sociis natoque penatibus et magnis dis parturient ' 
                    />
                </div>

                <div className="hidden lg:block">
                    <img className="w-full object-cover" src="/images/illustration.webp" alt="" />
                </div>

                <div className="lg:w-52 xl:w-60 space-y-8 lg:space-y-16 my-auto">
                    <Feature 
                        image='keypad.png' 
                        heading='Fully Integrations' 
                        paragraph='Cum sociis natoque penatibus et magnis dis parturient ' 
                    />
                    <Feature 
                        image='trending-up.png' 
                        heading='Avanced Analytics' 
                        paragraph='Cum sociis natoque penatibus et magnis dis parturient ' 
                    />
                </div>
            </div>

            <div className="hidden lg:flex justify-center"><Button text='Learn More' style='bg-gradient-to-br from-[#6a36ff] to-[#ac5fe6] text-white' /></div>
        </div>
      </div>
    </section>
  );
};

export default WhySaasly;
