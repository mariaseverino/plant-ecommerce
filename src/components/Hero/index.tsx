interface HeroProps {
    img: string;
    name: string;
    description: string;
}

export function Hero({ img, name, description }: HeroProps) {
    return (
        <div className="pt-32 md:pt-20 min-h-screen px-4 md:px-16 lg:px-28 py-2 md:py-0 flex">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 flex justify-center mb-5 md:mb-0">
                    <img
                        src={`../assets/imagens/${img}`}
                        alt=""
                        className="h-80 md:h-80 lg:h-[550px] object-contain"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:gap-8">
                    <h2 className="text-3xl md:text-5xl text-(--green-medium) font-bold text-center md:text-left">
                        {name}
                    </h2>
                    <p>{description}</p>
                    <button className="bg-(--green-medium) text-white rounded-full px-3 py-2 w-full lg:w-3xs cursor-pointer hover:bg-(--green-dark) font-medium">
                        + Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}
