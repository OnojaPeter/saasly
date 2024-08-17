import Button from "./Button"

const articles = [
    {
        image: 'article-img1.png',
        tag: 'Marketing',
        bgColor: 'bg-[#ffae00]',
        title: 'Digital Marketing Strategy in 2024',
        paragraph: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..'
    },
    {
        image: 'article-img2.png',
        tag: 'Marketing',
        bgColor: 'bg-[#0097FE]',
        title: 'Best platform for productivity ',
        paragraph: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..'
    },
    {
        image: 'article-img3.png',
        tag: 'Marketing',
        bgColor: 'bg-[#00c150]',
        title: 'Social media can growth your business',
        paragraph: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas..'
    }
]

const Article = () => {
  return (
    <section className="py-16 md:py-20">
        <div className="space-y-14 md:space-y-16">
            <div className="mx-auto">
                <h2 className="text-[#14358A] text-[32px] md:text-5xl font-bold text-center">
                    Our article on grow & tech
                </h2>
            </div>

            <div className=" space-y-12 ">
                <div className="flex flex-col items-center xl:flex-row gap-y-10 gap-x-6">
                    {articles.map((article, index) => {
                        return (
                            <div key={index} className="shadow-md overflow-hidden rounded-xl max-w-[384px] xl:max-w-full">
                                <div className="relative w-full">
                                    <div className={`absolute z-10 ${article.bgColor} rounded-md px-2 py-1 top-4 left-4 text-white`}>
                                        <p>{article.tag}</p>
                                    </div>

                                    <img className="relative object-cover w-full" src={`/images/${article.image}`} alt={`${article.image} tag`} />
                                </div>

                                <div className="p-6">
                                    <div className="space-y-3">
                                        <h4 className="text-[#006FBA] text-xl md:text-2xl font-bold tracking-tighter">{article.title}</h4>

                                        <p className="text-[#68718B]">{article.paragraph}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                

                <div className=" flex justify-center">
                    <Button text='Learn More' style='bg-gradient-to-br from-[#6a36ff] to-[#ac5fe6] text-white w-full lg:w-[18%]' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Article