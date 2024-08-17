import Button from "./Button"

const Feature = ({ image, heading, paragraph, text, style }) => {
  return (
    <div className="flex flex-col items-center lg:items-start">
        <div className="space-y-6 flex flex-col items-center lg:items-start">
            <div className="w-16 h-16 flex justify-center items-center rounded-[10px] bg-gradient-to-bl from-[#14358a] to-[#0097fe]">
                <img src={`/images/${image}`} alt="" />
            </div>

            <div className="space-y-3 text-center lg:text-start">
                <h3 className={`text-[#006FBA] font-bold text-2xl ${style ? 'max-w-full' : 'lg:max-w-[170px]'}`}>{heading}</h3>
                <p className="text-[#68718B]">{paragraph}</p>
            </div>
        </div>

        {text && 
            <div className="mt-6 lg:mt-12">   
                <Button text={text} style={style} /> 
            </div>
        }
    </div>
  )
}

export default Feature