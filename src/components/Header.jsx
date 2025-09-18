import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Icon from "./Icon";
import LanguageSwitcher from "./i18n-switch/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();
    const links = t("nav_links", { returnObjects: true });

    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const linksRef = useRef([]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";

        if (open) {
            gsap.to(menuRef.current, { autoAlpha: 1, duration: 0.3 });
            gsap.fromTo(
                linksRef.current,
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power4.out" }
            );
        } else {
            gsap.to(menuRef.current, { autoAlpha: 0, duration: 0.3 });
            gsap.to(linksRef.current, {
                x: -100,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: "power4.in",
            });
        }
    }, [open]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md text-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/" className="font-bricolage-bold text-2xl hover:text-victor-orange transition-all">
                    {/* <img src="/logo.svg" alt="Logo" className="h-10 w-auto" /> */}
                    Victor's Website
                </a>

                {/* Desktop */}
                <nav className="hidden md:flex items-center gap-6">
                    {links.map((item, i) => (
                        <a key={i} href={item.href} className="hover:text-orange-500 transition-colors">
                            {item.label}
                        </a>
                    ))}
                    <LanguageSwitcher />
                </nav>

                {/* Mobile toggle */}
                <div className="flex gap-2 md:hidden">
                    <LanguageSwitcher />
                    <button onClick={() => setOpen(true)} aria-label="Open menu">
                        <Icon name="menu" className="size-7 text-white" />
                    </button>
                </div>
            </div>

            {/* Mobile menu (siempre montado) */}
            <div
                ref={menuRef}
                className="fixed inset-0 bg-black h-screen z-50 grid place-items-center text-center opacity-0"
            >
                <div className="grid gap-8">
                    <img src="/logo.svg" alt="Logo" className="w-auto px-10" />

                    <button
                        onClick={() => setOpen(false)}
                        className="mx-auto bg-orange-500 rounded-full p-2 hover:bg-orange-700 transition"
                        aria-label="Close menu"
                    >
                        <Icon
                            name="close"
                            className="size-10 text-white transition-transform duration-500 hover:rotate-90"
                        />
                    </button>

                    {links.map((item, i) => (
                        <a
                            key={i}
                            ref={(el) => (linksRef.current[i] = el)}
                            href={item.href}
                            className="text-2xl font-semibold text-white hover:text-orange-500 transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
