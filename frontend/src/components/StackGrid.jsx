import Reveal from "./Reveal";
export default function StackGrid({ stack = [] }) {
    return (
        <Reveal>
            <div className="grid md:grid-cols-3 gap-4">
                {stack.map((g, i) => (
                    <div key={i} className="card-tight">
                        <div className="text-sm font-semibold">{g.group}</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {g.items.map((t, idx) => (
                                <span key={idx} className="badge">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Reveal>
    );
}
