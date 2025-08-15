export default function Card({ as: Tag = "div", className = "", children }) {
    return <Tag className={`surface p-6 ${className}`}>{children}</Tag>;
}
