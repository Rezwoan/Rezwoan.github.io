export default function Testimonial({ t }) {
    return (
        <div className="card-tight">
            <div className="flex items-center gap-3">
                {t.avatar ? (
                    <img
                        src={`/images/${t.avatar}`}
                        alt={t.author}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700" />
                )}
                <div className="min-w-0">
                    <div className="text-sm font-medium truncate">
                        {t.author}
                    </div>
                    <div className="text-xs opacity-60 truncate">
                        {t.roleCompany}
                    </div>
                </div>
            </div>
            <p className="mt-3 text-sm opacity-90">“{t.quote}”</p>
        </div>
    );
}
