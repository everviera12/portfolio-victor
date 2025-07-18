import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

export default function CardProject() {
    const { t } = useTranslation();
    const projects = t("projects", { returnObjects: true });
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-12">
            <h2 className="text-4xl font-bold">{t("projects_title")}</h2>

            <div
                ref={containerRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden flex flex-col group"
                    >
                        {/* Imagen */}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full h-44 overflow-hidden group">
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`w-full h-full group-hover:scale-105 transition-transform duration-200 ${project.className}`}
                            />
                        </a>

                        {/* Texto */}
                        <div className="p-4 flex flex-col flex-1 justify-between">
                            <div className="text-left">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                {project.description && (
                                    <p className="text-sm mt-1">{project.description}</p>
                                )}
                            </div>

                            {/* Enlace */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center text-sm gap-1 group/link group-hover:underline"
                            >
                                {t('link_label')}
                                <svg className="size-6 transition-transform duration-300 group-hover:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>

                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
