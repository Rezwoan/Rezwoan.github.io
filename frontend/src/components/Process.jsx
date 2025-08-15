import Reveal from "./Reveal";
export default function Process({ services = [] }) {
    return (
        <Reveal>
            <div className="grid md:grid-cols-3 gap-4">
                {services.map((s, i) => (
                    <div key={i} className="card-tight">
                        <div className="text-sm uppercase tracking-[.2em] opacity-60 mb-1">
                            Step {i + 1}
                        </div>
                        <div className="text-lg font-semibold">{s.title}</div>
                        <p className="opacity-80 mt-2 text-sm">{s.text}</p>
                    </div>
                ))}
            </div>
        </Reveal>
    );
}
