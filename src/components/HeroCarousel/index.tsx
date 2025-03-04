import { Hero } from '../Hero';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function HeroCarousel() {
    const plants = [
        {
            img: 'ora-pro-nobis.png',
            name: 'Ora pro-nóbis',
            description:
                'A Ora-pro-nóbis (Pereskia aculeata) é uma cactácea nativa da América do Sul, especialmente encontrada no Brasil. É uma planta perene que se destaca por suas folhas suculentas e nutritivas, ricas em proteínas e minerais. As folhas podem ser utilizadas em saladas, refogados e sopas.',
        },
        {
            img: 'arvore-da-felicidade.png',
            name: 'Árvore da Felicidade',
            description:
                'A Árvore da Felicidade, a macho (Polyscias guilfoylei), é uma planta ornamental que traz harmonia e felicidade ao lar. De fácil manutenção, é ideal para ambientes internos, embelezando e purificando o ar.',
        },
    ];
    return (
        <Carousel
            plugins={[Autoplay({ delay: 8000 })]}
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                {plants.map((plant) => (
                    <CarouselItem>
                        <Hero
                            img={plant.img}
                            name={plant.name}
                            description={plant.description}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
