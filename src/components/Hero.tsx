export function Hero() {
    return (
        <div className="pt-20 h-screen px-4 md:px-16 lg:px-28">
            <div className="flex h-full">
                <div className="w-1/2 h-full flex justify-center">
                    <img
                        src="../assets/imagens/ora-pro-nobis.png"
                        alt=""
                        className="h-4/5 self-center"
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-center gap-8">
                    <h2 className="text-5xl text-(--green-medium) font-bold">
                        Ora-pro-nóbis
                    </h2>
                    <p>
                        A Ora-pro-nóbis (Pereskia aculeata) é uma cactácea
                        nativa da América do Sul, especialmente encontrada no
                        Brasil. É uma planta perene que se destaca por suas
                        folhas suculentas e nutritivas, ricas em proteínas e
                        minerais. As folhas podem ser utilizadas em saladas,
                        refogados e sopas.
                    </p>
                    <button className="bg-(--green-medium) text-white rounded-full px-3 py-2 w-2/5 cursor-pointer hover:bg-(--green-dark) font-medium">
                        + Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}
