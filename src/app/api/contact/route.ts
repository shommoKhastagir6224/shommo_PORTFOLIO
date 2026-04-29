import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // ─── Option A: use Nodemailer / Resend / SendGrid here ───────────────────
    // import nodemailer from 'nodemailer';
    // const transporter = nodemailer.createTransport({ ... });
    // await transporter.sendMail({ from: email, to: 'you@example.com', subject, text: message });
    // ─────────────────────────────────────────────────────────────────────────

    console.log('New contact form submission:', { name, email, subject, message });

    return NextResponse.json({ success: true, message: 'Message received!' }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
