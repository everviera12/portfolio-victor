import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function useGsapScrollAnimation(
    ref,
    {
        from = { opacity: 0, y: 50 },
        to = { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        start = "top 80%",
        end,
        toggleActions = "play none none none",
    } = {}
) {
    useEffect(() => {
        if (!ref.current) return;

        const anim = gsap.fromTo(
            ref.current,
            from,
            {
                ...to,
                scrollTrigger: {
                    trigger: ref.current,
                    start,
                    end,
                    toggleActions,
                },
            }
        );

        return () => {
            anim.scrollTrigger?.kill();
            anim.kill();
        };
    }, [ref, from, to, start, end, toggleActions]);
}
