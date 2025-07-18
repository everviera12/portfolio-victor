import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceSection from './components/ExperienceSection'
import Hero from './components/Hero'
import LanguageSwitcher from './components/i18n-switch/LanguageSwitcher'
import CardProject from "./components/CardProject";
import ContactForm from "./components/ContactForm";

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
            <CardProject />
            <ExperienceSection />
            <section ref={aboutRef} className="max-w-5xl mx-auto py-16 text-left space-y-3">
                <h2 className="text-4xl font-bold">{t("about_me_title")}</h2>
                <p className="text-lg leading-relaxed">{t("about_me_description")}</p>
            </section>

            <div className="py-16">
                <ContactForm />
            </div>
        </>
    )
}

export default App
