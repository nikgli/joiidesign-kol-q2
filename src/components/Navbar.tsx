const Navbar = () => {
    return (
        <header className="w-full sticky top-0 z-50">
            <nav className="navbar md:justify-center bg-base-100 shadow-sm">
                {/* Mobile Menu */}
                <div className="md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="/">Home</a></li>
                            <li><a href="/store">Store</a></li>
                        </ul>
                    </div>
                </div>

                {/* Logo/site title */}
                {/* <div className="navbar-start">
                    <a className="btn btn-ghost text-xl" href="/">Joii Design</a>
                </div> */}

                {/* Desktop Menu */}
                <div className="navbar-center justify-center hidden md:flex">
                    <ul className="menu justify-center menu-horizontal px-1">
                        <li><a href="/">Home</a></li>
                        <li><a href="/store">Store</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar; 