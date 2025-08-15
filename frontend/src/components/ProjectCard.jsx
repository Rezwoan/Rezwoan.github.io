import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    const cover = project.images?.[0];
    return (
        <Link to={project.to} className="group block" data-magnetic>
            <div className="frame depth overflow-hidden relative">
                {cover ? (
                    <img
                        src={cover}
                        alt={project.title}
                        className="w-full h-64 md:h-[22rem] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                ) : (
                    <div className="w-full h-64 md:h-[22rem] bg-zinc-200/50 dark:bg-zinc-800" />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />
                <div className="absolute left-5 right-5 bottom-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="badge bg-white/20 border-white/20">
                            {project.category}
                        </span>
                        {project.featured && (
                            <span className="badge bg-white/20 border-white/20">
                                Featured
                            </span>
                        )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                        {project.title}
                    </h3>
                    <p className="opacity-90 text-sm md:text-base clamp-2">
                        {project.summary}
                    </p>
                </div>
            </div>
        </Link>
    );
}
