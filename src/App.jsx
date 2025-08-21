import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceSection from './components/ExperienceSection'
import Hero from './components/Hero'
import LanguageSwitcher from './components/i18n-switch/LanguageSwitcher'
import CardProject from "./components/CardProject";
import ContactForm from "./components/ContactForm";
import Implementation from "./components/Implementations";

gsap.registerPlugin(ScrollTrigger);

function App() {
    const { t } = useTranslation();
    const aboutRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            aboutRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <>
            <LanguageSwitcher />
            <Hero />

            <img src="/background/gradient-optimized.svg" className="absolute object-cover w-full left-0 -z-50 h-full top-[85%] lg:top-auto lg:h-auto lg:object-cover" />

            <CardProject />
            <Implementation />

            <section ref={aboutRef} className="max-w-6xl mx-auto py-16 text-left space-y-3">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                    {t("about_me_title")}
                </h2>
                <p className="text-lg leading-relaxed">{t("about_me_description")}</p>
            </section>

            <ExperienceSection />

            <div className="py-16">
                <ContactForm />
            </div>
        </>
    )
}

export default App
