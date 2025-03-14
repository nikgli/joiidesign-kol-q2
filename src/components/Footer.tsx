import logo from "../assets/240624-JOIIDESIGN-LOGO-11.png";

function Footer() {
    return (
        <footer data-theme="joiidesign" className="overflow-hidden font-display pt-10 pb-8 px-10 max-md:px-5 max-sm:p-6 bg-white">
            <div className="max-w-[1520px] mx-auto">
                {/* Top section with logo and navigation */}
                <div className="flex flex-wrap justify-between items-start gap-10 mb-16 max-xl:mb-10 max-xl:justify-center max-xl:text-center">
                    {/* Logo section */}
                    <div className="flex flex-col max-xl:items-center">
                        <img
                            src={logo}
                            alt="Joii Design Logo"
                            className="h-[90px] w-[90px] max-sm:w-20 max-sm:h-20 mb-4"
                        />
                        <p className="text-base tracking-tight leading-6 text-black text-opacity-80 max-w-md mt-2">
                            Creating joy through thoughtful design and beautiful, functional products for your everyday life.
                        </p>
                    </div>

                    {/* Navigation columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8 max-xl:w-full max-xl:justify-items-center">
                        {/* Company links */}
                        <div className="flex flex-col gap-4 max-xl:items-center">
                            <h2 className="text-base font-bold tracking-tight leading-6 text-black">
                                Company
                            </h2>
                            <div className="flex flex-col gap-2.5 max-xl:items-center">
                                <a
                                    href="https://joiidesign.com/pages/about-joii-design"
                                    className="text-base tracking-tight leading-6 text-black text-opacity-80 hover:text-accent transition-colors duration-200"
                                >
                                    About us
                                </a>
                                <a
                                    href="https://joiidesign.com/policies/contact-information"
                                    className="text-base tracking-tight leading-6 text-black text-opacity-80 hover:text-accent transition-colors duration-200"
                                >
                                    Contact us
                                </a>
                            </div>
                        </div>

                        {/* Products links */}
                        <div className="flex flex-col gap-4 max-xl:items-center">
                            <h2 className="text-base font-bold tracking-tight leading-6 text-black">
                                Product
                            </h2>
                            <div className="flex flex-col gap-2.5 max-xl:items-center">
                                <a
                                    href="https://joiidesign.com/collections/japandi-collection"
                                    className="text-base tracking-tight leading-6 text-black text-opacity-80 hover:text-accent transition-colors duration-200"
                                >
                                    Living Room Collection
                                </a>
                                <a
                                    href="https://joiidesign.com/collections/frontpage"
                                    className="text-base tracking-tight leading-6 text-black text-opacity-80 hover:text-accent transition-colors duration-200"
                                >
                                    Summer Collection
                                </a>
                            </div>
                        </div>

                        {/* Legal links */}
                        <div className="flex flex-col gap-4 max-xl:items-center">
                            <h2 className="text-base font-bold tracking-tight leading-6 text-black">
                                Legal
                            </h2>
                            <div className="flex flex-col gap-2.5 max-xl:items-center">
                                <a
                                    href="https://joiidesign.com/policies/privacy-policy"
                                    className="text-base tracking-tight leading-6 text-black text-opacity-80 hover:text-accent transition-colors duration-200"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="https://joiidesign.com/policies/terms-of-service"
                                    className="text-base tracking-tight leading-6 text-black text-opacity-80 hover:text-accent transition-colors duration-200"
                                >
                                    Terms of Service
                                </a>
                                <a
                                    href="https://joiidesign.com/policies/shipping-policy"
                                    className="text-base tracking-tight leading-6 text-black text-opacity-80 hover:text-accent transition-colors duration-200"
                                >
                                    Shipping Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-black bg-opacity-10" />

                {/* Bottom section with tagline and social */}
                <section className="flex flex-wrap justify-between items-center mt-8 gap-6 max-xl:flex-col max-xl:text-center">
                    <h1 className="text-3xl font-bold tracking-tighter text-black text-opacity-90 max-w-[600px] max-md:text-2xl max-sm:text-xl">
                        Thank and welcome in joy.
                    </h1>
                    
                    <div className="flex gap-6 items-center max-xl:mt-2">
                        <p className="text-base tracking-tight leading-6 text-black text-opacity-80">
                            Follow us:
                        </p>
                        <div className="flex items-center">
                            <a 
                                href="https://www.instagram.com/joiidesignins" 
                                aria-label="Instagram" 
                                className="p-2 rounded-full"
                            >
                                <svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" 
                                        fill="black"
                                    />
                                </svg>
                            </a>
                            <a 
                                href="https://www.tiktok.com/@joii.design" 
                                aria-label="TikTok" 
                                className="p-2 rounded-full"
                            >
                                <svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" 
                                        fill="black"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Copyright */}
                <div className="mt-10 pt-6 border-t border-black/10 text-sm text-black/60 text-center">
                    © {new Date().getFullYear()} Joii Design. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;