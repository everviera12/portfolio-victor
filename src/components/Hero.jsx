import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';

export default function Hero() {
    const { t } = useTranslation();

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } });

            // título
            tl.from(titleRef.current, { y: 30, opacity: 0 });

            // animar subtítulo palabra por palabra
            const words = descRef.current.querySelectorAll("span");
            tl.from(words, {
                y: 30,
                opacity: 0,
                stagger: 0.08, 
                duration: 0.6,
            }, "-=0.3");

            // botón + texto (entran casi enseguida)
            tl.from(ctaRef.current.children, {
                y: 25,
                opacity: 0,
                stagger: 0.15,
                duration: 0.6,
            }, "-=0.2");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="flex flex-col-reverse items-center max-w-[70rem] justify-between mx-auto gap-6 py-16 md:flex-row lg:gap-0"
        >
            <div className="space-y-6 text-left">
                <h1
                    ref={titleRef}
                    className="!font-sans !font-normal text-xl"
                    dangerouslySetInnerHTML={{ __html: t("hero_title") }}
                />

                <p
                    ref={descRef}
                    className="font-archivo-black text-5xl leading-14 lg:text-7xl lg:leading-20"
                    dangerouslySetInnerHTML={{ __html: t("hero_subtitle") }}
                />

                {/* CTA container (botón + texto) */}
                <div
                    ref={ctaRef}
                    className="flex flex-col gap-6 items-start w-full justify-between lg:flex-row lg:gap-0 lg:items-center"
                >
                    <div className="relative group inline-block rounded-full overflow-hidden bg-victor-orange">
                        <div className="absolute inset-0 rounded-full bg-[#0F4C5C] transform translate-y-full transition-transform duration-400 ease-out pointer-events-none group-hover:translate-y-0" />

                        <a
                            href="/contact"
                            className="relative z-10 flex items-center gap-2 text-white py-4 px-6 lg:px-10 lg:py-6"
                        >
                            <span className="font-semibold text-lg lg:text-xl" dangerouslySetInnerHTML={{ __html: t('hero_href') }} />
                            <Icon name="arrow-right" className="size-8" />
                        </a>
                    </div>

                    <span
                        className="max-w-[28rem] text-xl text-victor-black"
                        dangerouslySetInnerHTML={{ __html: t("hero_text") }}
                    />
                </div>
            </div>
        </section>
    );
}
