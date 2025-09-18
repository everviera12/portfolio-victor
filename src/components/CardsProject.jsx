import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icon";

gsap.registerPlugin(ScrollTrigger);

export default function CardsProject() {
    const { t } = useTranslation();
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray(".project-card").forEach((card) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 70%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const projects = t("projects", { returnObjects: true });

    return (
        <section
            ref={containerRef}
            className="py-16 px-10 grid gap-8 lg:gap-16"
        >
            {/* Título */}
            <h2
                dangerouslySetInnerHTML={{ __html: t("projects_title") }}
                className="font-archivo-black text-6xl text-start"
            />

            {/* Grid de proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {projects.map((project, index) => (
                    <article
                        key={index}
                        className="project-card relative rounded-xl overflow-hidden shadow-2xl bg-gray-100"
                    >
                        {/* Imagen */}
                        <img
                            src={project.image}
                            alt={`Project ${index}`}
                            className="w-full h-full object-cover"
                        />

                        {/* Botón */}
                        <div className="absolute bottom-4 right-4">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 rounded-full bg-victor-orange text-white font-semibold shadow-lg hover:bg-victor-coral transition"
                            >
                                <span>Visitar sitio</span>
                                <Icon name="arrow-right" className="size-5 md:size-6" />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
