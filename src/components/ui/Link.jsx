import Icon from "../Icon";

export default function Link({
    link = "/contact",
    label = "Click here",
    baseColor = "#FF7F33",
    hoverColor = "#000814",
    textColor = "#ffffff",
    linkClasses = "",
    labelClasses = "",
}) {
    return (
        <div
            className="relative group inline-block rounded-full overflow-hidden"
            style={{ backgroundColor: baseColor }}
        >
            {/* Capa hover */}
            <div
                className="absolute inset-0 rounded-full transform translate-y-full transition-transform duration-400 ease-out pointer-events-none group-hover:translate-y-0"
                style={{ backgroundColor: hoverColor }}
            />

            <a
                href={link}
                // target="_blank"
                // rel="noopener noreferrer"
                className={`relative z-10 flex items-center gap-2 ${linkClasses}`}
                style={{ color: textColor }}
            >
                <span className={`${labelClasses}`}>{label}</span>
                <Icon name="arrow-right" className="size-8" />
            </a>
        </div>
    );
}
