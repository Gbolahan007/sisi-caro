"use server";

import { sendMail } from "./mailer";

export async function scheduleMeeting(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const date = formData.get("date");
  const time = formData.get("time");

  try {
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: "📅 New Meeting Scheduled",
      html: `
        <h2>New Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
    });

    await sendMail({
      to: email,
      subject: "✅ Your Meeting is Confirmed",
      html: `
        <h2>Hi ${name},</h2>
        <p>Your meeting has been scheduled successfully.</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>We look forward to speaking with you!</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
