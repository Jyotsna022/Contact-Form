import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./logo";

const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/auth", label: "Logout" },
];

const linkClassName = ({ isActive }) =>
    [
        "rounded-full px-4 py-2 text-md font-semibold transition-all duration-200",
        isActive
            ? "bg-pink-50 text-[#954D4B]"
            : "text-[#954D4B] hover:bg-pink-50 hover:text-[#954D4B] hover:-translate-y-0.5",
    ].join(" ");

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-pink-100 bg-white-90 backdrop-blur">
            <nav className="mx-5 flex max-w-6xl gap-100 px-4 py-4 sm:px-6 lg:px-3">
                <NavLink to="/" className="flex gap-3 rounded-xl p-2 transition-all duration-200 hover:bg-[#a37471] hover:shadow-sm">
                    <Logo />
                    <div className="leading-tight">
                        <p className=" font-semibold text-[#954D4B] italic font-serif">Satin Beauty</p>
                        <p className="text-xs text-[#954D4B]  font-serif">Authentic Makeup Brand</p>
                    </div>
                </NavLink>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to} className={linkClassName}>
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 md:hidden"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {isOpen && (
                <div className="border-t border-pink-100 bg-white px-4 pb-4 pt-2 shadow-sm md:hidden">
                    <div className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={linkClassName}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="block rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-pink-50 hover:text-pink-600">
                                    {item.label}
                                </span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}