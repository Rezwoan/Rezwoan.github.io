import Reveal from "./Reveal";
export default function LogoCloud({ logos = [] }) {
    return (
        <Reveal>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
                {logos.map((l, i) => (
                    <div
                        key={i}
                        className="h-10 flex items-center justify-center rounded-xl border border-zinc-200/60 dark:border-zinc-800/80 bg-white/40 dark:bg-white/[.04] backdrop-blur"
                    >
                        <img
                            src={`/images/${l.file}`}
                            alt={l.name}
                            className="h-6 object-contain"
                        />
                    </div>
                ))}
            </div>
        </Reveal>
    );
}
