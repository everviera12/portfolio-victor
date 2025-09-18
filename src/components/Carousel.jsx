import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

export default function Carousel() {
    const { t } = useTranslation();
    const clients = t("clients", { returnObjects: true });

    useEffect(() => {
        const ctx = gsap.context(() => {
            const track = document.querySelector(".carousel-track");

            // Duplicar contenido para efecto infinito
            track.innerHTML += track.innerHTML;

            const totalWidth = track.scrollWidth / 2;

            gsap.to(track, {
                x: -totalWidth,
                duration: 40,
                ease: "none",
                repeat: -1,
            });
        });

        return () => ctx.revert();
    }, [clients]);

    return (
        <section className="w-full overflow-hidden relative py-16">
            {/* Gradientes laterales */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-20" />

            <div className="relative w-full">
                <div className="carousel-track flex gap-16">
                    {clients.map((client, index) => (
                        <a
                            key={index}
                            href={client.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 w-[200px] h-[120px] flex items-center justify-center"
                        >
                            <img
                                src={client.image}
                                alt={`Client-${index}`}
                                className="max-w-[160px] max-h-[100px] object-cover mx-auto filter grayscale hover:grayscale-0 transition duration-500"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
