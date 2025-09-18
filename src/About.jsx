import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "./components/Carousel";
import Link from "./components/ui/Link";
import ContactForm from "./components/ContactForm";
import CardsProject from "./components/CardsProject";
import CardsServices from "./components/CardsServices";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const { t } = useTranslation();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animación textos
            gsap.from(".about-text span, .about-text h2, .about-text p, .about-text a", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 80%",
                },
            });

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
        <>
            <head>
                <title>About</title>
            </head>

            <section className="about-section py-16 flex ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 about-text">
                    <div className="text-start">
                        <span className="text-sm font-medium block">
                            {t("about_me_title")}
                        </span>
                        <h2 className="text-3xl lg:text-5xl">
                            {t("about_me_short_title")}
                        </h2>
                    </div>

                    {/* Derecha */}
                    <div className="space-y-6 text-start">
                        <p className="text-victor-black">{t("about_me_short_description")}</p>
                        <Link
                            link="/contct"
                            label={t("hero_href")}
                            baseColor="#FF7F33"
                            hoverColor="#0077b6"
                            textColor="#ffffff"
                            linkClasses="py-2 px-3"
                            labelClasses="font-semibold"
                        />
                    </div>
                </div>
            </section>

            <Carousel />

            <div className="about-image  absolute bottom-0 -z-10 lg:flex lg:justify-center lg:top-10">
                <img
                    src="/avatar/avatar-happy.png"
                    alt="avatar happy"
                />
            </div>

            <CardsServices />

            <div className="bg-victor-orange absolute left-0 w-full rounded-t-2xl py-16">
                <h2 className="text-5xl text-white">{t("form_title")}</h2>
                <ContactForm />
            </div>
        </>
    );
}
