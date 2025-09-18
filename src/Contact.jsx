import { useEffect, useRef } from "react";
import ContactForm from "./components/ContactForm";
import { useGsapScrollAnimation } from "./components/hooks/useGsapScrollAnimation";
import Link from "./components/ui/Link";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {

    const { t } = useTranslation();
    const aboutRef = useRef(null);
    useGsapScrollAnimation(aboutRef);



    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(
                ".about-image img",
                { y: 200, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".about-image",
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div>
            <section
                ref={aboutRef}
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
                {/* Columna Izquierda: Texto */}
                <div className="space-y-6 text-left">
                    <h2 className="!font-archivo-black text-4xl md:text-5xl bg-gradient-to-r from-victor-orange via-victor-coral to-victor-skyblue bg-clip-text text-transparent">
                        {t("about_me_title")}
                    </h2>

                    <p className="text-lg leading-relaxed text-victor-black max-w-xl">
                        {t("about_me_description")}
                    </p>

                    <Link
                        link="/about"
                        label={t("about_href")}
                        baseColor="#FF7F33"
                        hoverColor="#000814"
                        textColor="#ffffff"
                        linkClasses="py-3 px-6"
                        labelClasses="font-semibold text-lg lg:text-xl"
                    />
                </div>

                {/* Columna Derecha: Imagen */}
                <div className="about-image flex justify-center md:justify-end">
                    <img
                        src="/avatar/avatar-asowme.svg"
                        alt="Victor Avatar"
                        className="w-60 md:w-80 lg:w-[22rem] drop-shadow-xl"
                    // style={{
                    //     WebkitMaskImage: "linear-gradient(black 85%, transparent 100%)",
                    //     maskImage: "linear-gradient(black 85%, transparent 100%)",
                    // }} 
                    />
                </div>
            </section>

            <div className="bg-victor-orange absolute left-0 w-full rounded-t-2xl py-16">
                <h2 className="text-5xl text-white">{t("form_title")}</h2>
                <ContactForm />
            </div>
        </div>
    );
}