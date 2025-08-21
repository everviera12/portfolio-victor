import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CardProject() {
    const { t } = useTranslation();
    const projects = t("projects", { returnObjects: true });
    const containerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, [currentPage]);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    return (
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-12">
            <h2 className="text-4xl text-start font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
                {t("projects_title")}
            </h2>

            <div key={currentPage} ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} t={t} />
                ))}
            </div>

            {projects.length > projectsPerPage && (
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <img src="/icons/arrow-circle-right.svg" className="size-8 bg-white rounded-full rotate-180" />
                    </button>

                    <span dangerouslySetInnerHTML={{ __html: `${currentPage} &ndash; ${totalPages}` }} />

                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <img src="/icons/arrow-circle-right.svg" className="size-8 bg-white rounded-full" />
                    </button>
                </div>
            )}
        </section>
    );
}

function ProjectCard({ project, t }) {
    return (
        <div className="border rounded-lg overflow-hidden flex flex-col group transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full h-44 overflow-hidden group">
                <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full ${project.className}`}
                />
            </a>

            <div className="p-4 flex flex-col flex-1 justify-between bg-black">
                <div className="text-left">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    {project.description && (
                        <p className="text-sm mt-1">{project.description}</p>
                    )}
                </div>

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
    );
}