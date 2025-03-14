import design from "../assets/design.png";

function Design() {
    return (
        <article className="flex font-display gap-20 justify-between p-10 mx-auto my-0 bg-white max-w-[1600px] max-md:flex-col max-md:gap-10 max-md:p-5 max-sm:gap-6 max-sm:p-4">
            <section className="flex-1 pt-80 max-w-[686px] max-[1440px]:pt-20 max-md:pt-10 max-md:max-w-full">
                <h2 className="mb-6 text-4xl font-bold tracking-tight leading-9 text-black max-sm:text-3xl max-sm:leading-8">
                    Design with joy
                </h2>
                <p className="text-xl tracking-tight leading-8 text-black text-opacity-80 max-sm:text-base max-sm:leading-6">
                    At Joii Design, we craft furniture that brings joy, harmony, and purpose
                    into your home. Inspired by the philosophy of Zhuoyi (卓艺) and the
                    serenity of Zen, our approach finds beauty in simplicity and meaning in
                    the everyday. We merge timeless traditions with modern innovation,
                    ensuring that each piece transforms your space with both style and
                    intention.
                </p>
            </section>
            <section className="flex-1 max-md:w-full">
                <img
                    src={design}
                    className="object-cover h-[890px] w-[668px] max-[1440px]:object-contain max-[1440px]:w-full max-[1440px]:h-[550px] max-md:h-auto"
                    alt="Interior design showcase"
                />
            </section>
        </article>
    );
}

export default Design;