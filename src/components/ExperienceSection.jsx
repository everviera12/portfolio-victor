import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
    const { t } = useTranslation();
    const experienceList = t("experience", { returnObjects: true });
    const sectionRefs = useRef([]);
    const descRefs = useRef([]);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        sectionRefs.current.forEach((el, i) => {
            gsap.fromTo(
                el,
                { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    const toggleDescription = (index) => {
        if (openIndex === index) {
            gsap.to(descRefs.current[index], {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
            });
            setOpenIndex(null);
        } else {
            if (openIndex !== null) {
                gsap.to(descRefs.current[openIndex], {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.inOut",
                });
            }
            gsap.set(descRefs.current[index], { height: "auto", opacity: 1 });
            gsap.from(descRefs.current[index], {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
            });
            setOpenIndex(index);
        }
    };

    const ArrowDown = (
        <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );

    const ArrowUp = (
        <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
    );

    return (
        <section className="py-16 max-w-5xl mx-auto space-y-16">
            <h2
                className="text-4xl font-bold text-center mb-12"
                dangerouslySetInnerHTML={{ __html: t("work_experience_title") }}
            />

            {experienceList.map((job, i) => (
                <div
                    key={i}
                    ref={(el) => (sectionRefs.current[i] = el)}
                    className={`flex justify-between items-start gap-8 flex-col md:flex-row `}
                >
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border items-start">
                        {job.logo ? (
                            <img
                                src={job.logo}
                                alt={job.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full" />
                        )}
                    </div>

                    <div className="flex-1 text-left space-y-1">
                        <h3 className="text-2xl font-semibold">{job.title}</h3>
                        <p className="text-md">{job.rol}</p>
                        <p className="text-sm">{job.time}</p>

                        <button
                            onClick={() => toggleDescription(i)}
                            className="flex items-center gap-1 text-sm"
                        >
                            {openIndex === i ? "Hide description" : "Show description"}
                            {openIndex === i ? ArrowUp : ArrowDown}
                        </button>

                        <div
                            ref={(el) => (descRefs.current[i] = el)}
                            className="overflow-hidden h-0 opacity-0"
                        >
                            <p>{job.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
