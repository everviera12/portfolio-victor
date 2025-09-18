import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CardsServices() {
    const { t } = useTranslation();
    const services = t("services", { returnObjects: true });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.25,
                scrollTrigger: {
                    trigger: ".services-section",
                    start: "top 85%",
                },
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="services-section py-16 grid gap-8">
            <h2 className="text-3xl text-victor-orange text-shadow-2xs lg:text-5xl">
                {t("services_title")}
            </h2>

            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="service-card group text-start bg-victor-skyblue p-6 border border-victor-coral rounded grid gap-3 hover:shadow-2xl transition-shadow"
                    >
                        <h3 className="text-2xl font-medium text-victor-black group-hover:text-victor-orange transition-colors duration-300">
                            {service.title}
                        </h3>
                        <p className="leading-relaxed text-victor-black">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
