import { ProductCard } from "./ProductCard/ProductCard";
import chair from "../assets/accent-armchair.png";
import lamp from "../assets/warm-lights.png";
import smart from "../assets/smart-furniture.png";

const Products: React.FC = () => {
    const products = [
        {
            image: chair,
            altText: "Accent chair",
            title: "Accent pieces",
            description:
                "Unique selection of renowned design furniture. Crafted with care each piece transforms a home.",
        },
        {
            image: lamp,
            altText: "Warm light",
            title: "Warm lights",
            description:
                "Our selection of lamps are all features of joyful design, portable with a warm atmospheric glow.",
        },
        {
            image: smart,
            altText: "Smart furniture",
            title: "Smart furniture",
            description:
                "Like the origami stool, our collection of smart furniture express unique design and smart adaptability.",
        },
    ];
    return (
        <div className="p-10 lg:px-20 mx-auto my-0 max-w-[1600px] font-display max-md:p-5 max-sm:p-4">
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
                rel="stylesheet"
            />
            <header className="pt-6 py-0 mx-auto my-0 max-w-[1456px] mb-16">
                <h1 className="mb-8 text-4xl tracking-tighter text-black leading-[72px] max-md:text-4xl max-md:leading-[54px] max-sm:text-3xl max-sm:leading-10">
                    Joii furniture
                </h1>
                <p className="text-xl tracking-tight leading-8 text-black text-opacity-80 max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">
                    All our furniture pieces reflect eastern philosophies of clarity,
                    singularity of purpose, and the pursuit of excellence in the ordinary.
                </p>
            </header>

            <section className="flex flex-col items-center md:items-center lg:flex-row lg:justify-between lg:items-stretch gap-20 mb-12 md:gap-16 lg:gap-10 max-md:gap-10">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        altText={product.altText}
                        title={product.title}
                        description={product.description}
                    />
                ))}
            </section>
        </div>
    );
};

export default Products;
