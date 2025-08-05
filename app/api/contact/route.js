// app/api/contact/route.js

import nodemailer from "nodemailer"

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json()

        // Basic validation
        if (!name || !email || !subject || !message) {
            return new Response(
                JSON.stringify({ success: false, message: "All fields are required." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            )
        }

        // Gmail SMTP (App Password). NOTE: App passwords are 16 chars with no spaces.
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "reezzrex@gmail.com",
                pass: "xwxidzjtaieqfbta", // <- your app password without spaces
            },
        })

        // Email to your main inbox
        const info = await transporter.sendMail({
            from: `"Rezwoan Portfolio" <reezzrex@gmail.com>`,
            to: "frezwoan@gmail.com",
            replyTo: email, // so you can reply directly to the sender
            subject: `[Portfolio] ${subject} — from ${name}`,
            text: `New message from your portfolio contact form.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`,
            html: `
        <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#111">
          <h2 style="margin:0 0 10px">New portfolio contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="white-space:pre-wrap"><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
        })

        // You can log the messageId if needed
        // console.log("Message sent:", info.messageId)

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        })
    } catch (err) {
        // console.error(err)
        return new Response(
            JSON.stringify({
                success: false,
                message: "Failed to send email. Please try again later.",
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        )
    }
}
