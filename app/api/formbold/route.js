// app/api/formbold/route.js
// Receives a browser POST, forwards to FormBold, then redirects back to /contact?sent=1.
// Add ?dry=1 to the URL to skip the upstream call and return JSON for quick verification.

export async function POST(req) {
    try {
        const url = new URL(req.url);
        const isDry = url.searchParams.get("dry") === "1";

        // Accept multipart/form-data or JSON (both work)
        let name, email, subject, message;
        const ctype = req.headers.get("content-type") || "";
        if (ctype.includes("multipart/form-data")) {
            const fd = await req.formData();
            name = fd.get("name") || "";
            email = fd.get("email") || "";
            subject = fd.get("subject") || "";
            message = fd.get("message") || "";
        } else {
            const body = await req.json().catch(() => ({}));
            name = body.name || "";
            email = body.email || "";
            subject = body.subject || "";
            message = body.message || "";
        }

        if (!name || !email || !subject || !message) {
            return new Response(
                JSON.stringify({ success: false, message: "All fields are required." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        if (isDry) {
            // No upstream call; just prove the route is hit.
            return new Response(
                JSON.stringify({
                    success: true,
                    mode: "dry",
                    echo: { name, email, subject, message },
                }),
                { status: 200, headers: { "Content-Type": "application/json" } }
            );
        }

        // Build the upstream payload exactly like your working curl
        const upstream = new FormData();
        upstream.append("name", name);
        upstream.append("email", email);
        upstream.append("subject", subject);
        upstream.append("message", message);

        const resp = await fetch("https://formbold.com/s/912PR", {
            method: "POST",
            body: upstream,
            redirect: "follow",
        });

        if (!resp.ok) {
            const text = await resp.text().catch(() => "");
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "FormBold rejected the submission.",
                    status: resp.status,
                    detail: text.slice(0, 500),
                }),
                { status: 502, headers: { "Content-Type": "application/json" } }
            );
        }

        // SUCCESS → send the browser back to /contact?sent=1
        return new Response(null, {
            status: 303,
            headers: { Location: "/contact?sent=1" },
        });
    } catch (e) {
        return new Response(
            JSON.stringify({ success: false, message: "Server error." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

export async function GET() {
    return new Response("Use POST for submissions.", { status: 405 });
}
