interface ProductCardProps {
    image: string;
    altText: string;
    title: string;
    description: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    image,
    altText,
    title,
    description,
}) => {
    return (
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-8 lg:flex-col w-full lg:max-w-[30%]">
            <article className="bg-white border border-solid border-black border-opacity-50 w-full max-w-[429px] md:max-w-[350px] lg:w-full flex flex-col h-full">
                <img
                    src={image}
                    className="object-cover w-full h-[274px] flex-shrink-0"
                    alt={altText}
                />
                <div className="px-8 py-6 max-sm:p-5 text-left flex flex-col h-full">
                    <h3 className="mb-6 text-3xl font-bold tracking-tight leading-9 text-black max-sm:mb-4 max-sm:text-3xl md:mb-2 lg:mb-6 text-left">
                        {title}
                    </h3>
                    <p className="text-xl tracking-tight leading-8 text-black text-opacity-80 max-sm:text-lg max-sm:leading-7 md:hidden lg:block">
                        {description}
                    </p>
                </div>
            </article>
            <p className="hidden md:block lg:hidden text-xl tracking-tight leading-8 text-black text-opacity-80 md:max-w-[400px] xl:max-w-none pt-6 flex-1">
                {description}
            </p>
        </div>
    );
};
