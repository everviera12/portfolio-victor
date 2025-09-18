import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [activeLang, setActiveLang] = useState(i18n.language);

    const changeLanguage = (lang) => {
        if (lang === activeLang) return;

        setActiveLang(lang);
        i18n.changeLanguage(lang);

        const index = lang === "en" ? 0 : 1;
        gsap.to(".lang-indicator", {
            x: index * 100 + "%",
            duration: 0.3,
            ease: "power2.out",
        });
    };

    useEffect(() => {
        // Set initial position
        gsap.set(".lang-indicator", {
            x: activeLang === "en" ? "0%" : "100%",
        });
    }, [activeLang]);

    return (
        <div className="sticky top-10 z-50">
            <div className="relative flex border rounded-full overflow-hidden w-32 h-8 bg-black">
                {/* Animated indicator */}
                <div className="lang-indicator absolute top-0 left-0 w-1/2 h-full bg-white text-black rounded-full z-0" />

                {/* Buttons */}
                {["en", "es"].map((lang, idx) => (
                    <button
                        key={idx}
                        onClick={() => changeLanguage(lang)}
                        className={`relative z-10 cursor-pointer flex-1 text-sm font-medium transition-colors duration-300 
                            ${activeLang === lang ? "text-black" : "text-white"}`}
                    >
                        {lang.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
