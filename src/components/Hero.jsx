import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation()

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } });

            tl.from(titleRef.current, { y: 30, opacity: 0 })
                .from(descRef.current, { y: 30, opacity: 0 }, "-=0.6")
                .from(imgRef.current, { scale: 0.9, opacity: 0 }, "-=1");
        }, sectionRef);

        return () => ctx.revert(); // limpia animaciones al desmontar
    }, []);

    return (
        <section
            ref={sectionRef}
            className="flex flex-col-reverse items-center max-w-[70rem] justify-between mx-auto gap-6 py-16 md:flex-row lg:gap-0"
        >
            <div className="text-center space-y-2 md:text-left">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-bold"
                    dangerouslySetInnerHTML={{ __html: t("hero_title") }}
                />
                <p
                    ref={descRef}
                    className="text-lg md:text-xl lg:w-[35rem]"
                    dangerouslySetInnerHTML={{ __html: t("hero_subtitle") }}
                />

                <div className="flex justify-center text-center items-start gap-2 mt-10 lg:justify-start">
                    <span className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: t("hero_span") }}/>
                    <svg
                        className="size-6 animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            <div>
                <img
                    ref={imgRef}
                    src="/avatar.jpg"
                    alt="Victor"
                    className="rounded-full w-56 h-56 object-cover shadow-lg"
                />
            </div>
        </section>
    );
}