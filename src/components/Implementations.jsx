import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

export default function Implementation() {
    const { t } = useTranslation();
    const implementations = t("implementations", { returnObjects: true });
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
    }, []);

    return (
        <section className="max-w6xl mx-auto px-6 py-20 space-y-12">
            <div className="space-y-3">
                <h2 className="text-4xl text-start font-bold">
                    {t("implementations_title")}
                </h2>
                <p className="text-xl text-start max-w-5xl">{t("implementations_description")}</p>
            </div>

            <div
                ref={containerRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {implementations.map((implementation, index) => (
                    <div
                        key={index}
                        className="overflow-hidden flex flex-col group"
                    >
                        {/* video */}
                        <a href={implementation.link} target="_blank" rel="noopener noreferrer" className="overflow-hidden group">
                            <video loop className={`w-full h-full`}>
                                <source src={implementation.resource} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </a>

                        {/* Texto */}
                        <div className="py-4 flex flex-col flex-1 justify-between">
                            <div className="text-left">
                                <h3 className="text-lg font-semibold">{implementation.name}</h3>
                                {implementation.description && (
                                    <p className="text-sm mt-1 trunca">{implementation.description}</p>
                                )}
                            </div>

                            {/* Enlace */}
                            <a
                                href={implementation.link}
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
