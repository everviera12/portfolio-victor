import { useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from './components/Hero'
import CardsProject from "./components/CardsProject";
import { useGsapScrollAnimation } from "./components/hooks/useGsapScrollAnimation";
import Carousel from "./components/Carousel";
import Link from "./components/ui/Link";
import ContactForm from "./components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

function App() {
    const { t } = useTranslation();
    const aboutRef = useRef(null);
    useGsapScrollAnimation(aboutRef);

    return (
        <>
            <Hero />
            <CardsProject />
            <Carousel />
            <section
                ref={aboutRef}
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
                {/* Columna Izquierda: Texto */}
                <div className="space-y-6 text-left">
                    <h2 className="!font-archivo-black text-4xl md:text-5xl bg-gradient-to-r from-victor-orange via-victor-coral to-victor-skyblue bg-clip-text text-transparent">
                        {t("about_me_title")}
                    </h2>

                    <p className="text-lg leading-relaxed text-victor-black max-w-xl">
                        {t("about_me_description")}
                    </p>

                    <Link
                        link="/about"
                        label={t("about_href")}
                        baseColor="#FF7F33"
                        hoverColor="#000814"
                        textColor="#ffffff"
                        linkClasses="py-3 px-6"
                        labelClasses="font-semibold text-lg lg:text-xl"
                    />
                </div>

                {/* Columna Derecha: Imagen */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/avatar/avatar-asowme.svg"
                        alt="Victor Avatar"
                        className="w-60 md:w-80 lg:w-[22rem] drop-shadow-xl"
                    // style={{
                    //     WebkitMaskImage: "linear-gradient(black 85%, transparent 100%)",
                    //     maskImage: "linear-gradient(black 85%, transparent 100%)",
                    // }} 
                    />
                </div>
            </section>

            <div className="bg-victor-orange absolute left-0 w-full rounded-t-2xl py-16">
                <h2 className="text-5xl text-white">{t("form_title")}</h2>
                <ContactForm />
            </div>
        </>
    )
}

export default App
