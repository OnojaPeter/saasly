const logos = [
    '/images/company-logo1.png',
    '/images/company-logo2.png',
    '/images/company-logo3.png',
    '/images/company-logo4.png',
    '/images/company-logo5.png',
]

const CompanyLogo = () => {
  return (
    <div className="h-[124px] md:h-auto grid grid-cols-2 grid-rows-2 gap-2 md:flex md:items-center md:justify-between">
      {logos.map((logo, index) => {
        return (
          <img
            key={index}
            className={`object-contain ${index < 4 ? 'h-full' : 'hidden lg:block'} h-10 lg:h-12 md:w-40 xl:w-full`}
            src={logo}
            alt={`company logo ${index + 1}`}
          />
        );
      })}
    </div>
  )
}

export default CompanyLogo

//grid grid-cols-2  md:gap-x-[42px] sm:grid-cols-3 lg:grid-flow-col