import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between items-center py-4">
                <div className="nav-brand">
                    <a href="/">
                        <Image
                            src="/logo.svg"
                            alt="Eventry"
                            width={150}
                            height={60}
                        />
                    </a>
                </div>

                <ul className="flex gap-4 text-[#9C9C9C]">
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
