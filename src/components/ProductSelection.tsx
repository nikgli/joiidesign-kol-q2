// import ImgComponent from './components/ImgComponent';
// import SectionDivider from './components/SectionDivider';
// import ButtonComponent from './components/ButtonComponent';
// import TextComponent from './components/TextComponent';
// import HeaderComponent from './components/HeaderComponent';

import mushroomLamp from '../assets/mushroom-lamp.webp';
import glowingMushroomLamp from '../assets/glowing-mushroom-lamp.jpg';
import origamiStool from '../assets/origami-stool.jpg';
import joiiLightball from '../assets/joii-lightball.jpg';
import origamiVase from '../assets/orgiami-vase.jpg';

import '../app.css';

interface Product {
    image: string;
    altText: string;
    title: string;
    description: string;
    additionalText: string;
    buttonLabel: string;
    buttonLink: string;
}

function ProductSelection() {
    const products: Product[] = [
        {
            image: mushroomLamp,
            altText: "Mushroom Lamp",
            title: "Mushroom Lamp",
            description: "Designed by Joii, the Mushroom Lamp invites intentional living through its elegant simplicity and functional beauty. Its adaptable nature makes it ideal for bedside tables, reading nooks or outdoor gatherings.",
            additionalText: "If you love this piece and feel it could highlight your home while being something you'd enjoy showcasing, feel free to explore more details on our website.",
            buttonLabel: "See now",
            buttonLink: "https://joiidesign.com/products/lamp"
        },
        {
            image: glowingMushroomLamp,
            altText: "Glowing Mushroom Lamp",
            title: "Glowing Mushroom Lamp",
            description: "Illuminate your space with the Glowing Mushroom Lamp, where minimalist design meets ambient lighting.",
            additionalText: "If you love this piece and feel it could highlight your home while being something you'd enjoy showcasing, feel free to explore more details on our website.",
            buttonLabel: "See now",
            buttonLink: "https://joiidesign.com/products/glowing-mushroom-lamp"
        },
        {
            image: origamiStool,
            altText: "Origami Stool",
            title: "Origami Stool",
            description: "Designed by Joii, the Origami Stool blends artful design with practical versatility. If you feel this piece could elevate your space and be something you'd love to showcase, explore more on our website.",
            additionalText: "If you love this piece and feel it could highlight your home while being something you'd enjoy showcasing, feel free to explore more details on our website.",
            buttonLabel: "See now",
            buttonLink: "https://joiidesign.com/products/origami-stool"
        },
        {
            image: joiiLightball,
            altText: "Joii Lightball",
            title: "Joii Lightball",
            description: "Designed by Joii, the Lightball brings a soft, ambient glow wherever you place it. Its portable, spherical form makes it as playful as it is practical — perfect for creating a warm atmosphere in any corner of your home. If this luminous companion feels like the right touch for your space, discover more on our website.",
            additionalText: "If you love this piece and feel it could highlight your home while being something you'd enjoy showcasing, feel free to explore more details on our website.",
            buttonLabel: "See now",
            buttonLink: "https://joiidesign.com/products/lightball"
        },
        {
            image: origamiVase,
            altText: "Origami Vase",
            title: "Origami Vase",
            description: "Inspired by the elegance of folded paper, the Joii Origami Vase is a sculptural piece with a delicate yet durable form. Artful and functional, it's designed to hold your favorite blooms while making a statement all on its own. If you see this vase complementing your style, explore more on our website.",
            additionalText: "If you love this piece and feel it could highlight your home while being something you'd enjoy showcasing, feel free to explore more details on our website.",
            buttonLabel: "See now",
            buttonLink: "https://joiidesign.com/products/origami-vase"
        }
        // You can add more products here following the same structure
    ];

    return (
        <section data-theme="joiidesign" className="overflow-hidden">
            <h2 className="text-5xl font-display tracking-tighter text-center text-black leading-[80px] max-md:text-5xl max-md:leading-[60px] max-sm:text-4xl max-sm:leading-10 mb-12">
                Product selection
            </h2>
            
            {products.map((product, index) => (
                <div key={index} className="flex flex-col lg:flex-row font-display gap-10 lg:p-10 mx-auto mb-16 bg-white max-w-[1600px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
                    <div className="lg:max-w-[45%] lg:flex lg:items-center w-screen lg:w-full relative left-[50%] right-[50%] -mx-[50vw] lg:left-0 lg:right-0 lg:mx-0">
                        <img src={product.image} alt={product.altText} className="object-cover w-full h-auto" />
                    </div>
                    <div className="flex flex-col flex-1 gap-4 pt-2 px-4 sm:px-6 md:px-6 md:mx-auto lg:self-center lg:p-0 lg:pt-4 max-w-[686px] max-md:pt-2 max-md:max-w-full">
                        <h3 className="text-3xl font-bold tracking-tighter text-black max-lg:text-center leading-[30px] max-md:text-xl max-md:leading-[25px] max-sm:text-lg max-sm:leading-8">
                            {product.title}
                        </h3>
                        <p className="text-xl tracking-tight leading-8 text-black text-opacity-80 max-md:text-lg max-sm:text-base max-sm:leading-6">
                            {product.description}
                        </p>
                        <div className="mx-0 my-6 w-full h-px bg-black bg-opacity-50" />
                        <div className="text-base tracking-tight leading-6 text-black text-opacity-60 max-md:text-sm max-sm:text-xs">
                            {product.additionalText}
                        </div>
                        <a
                            href={product.buttonLink}
                            className="btn btn-accent mt-6 w-36 text-lg font-medium tracking-tight h-[52px] max-sm:w-40 max-lg:mx-auto"
                            aria-label={product.buttonLabel}
                        >
                            {product.buttonLabel}
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default ProductSelection;