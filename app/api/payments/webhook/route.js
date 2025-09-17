import crypto from "crypto";

export async function POST(request) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-paystack-signature");

    // Verify webhook signature
    const hash = crypto
      .createHmac("sha512", process.env.PAYSTACK_WEBHOOK_SECRET)
      .update(body)
      .digest("hex");

    if (hash !== signature) {
      return Response.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(body);

    // Handle different event types
    switch (event.event) {
      case "charge.success":
        // Payment was successful
        await handleSuccessfulPayment(event.data);
        break;

      case "charge.failed":
        // Payment failed
        await handleFailedPayment(event.data);
        break;

      default:
        console.log(`Unhandled event type: ${event.event}`);
    }

    return Response.json({ message: "Webhook processed successfully" });
  } catch (error) {
    console.error("Webhook error:", error);
    return Response.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

async function handleSuccessfulPayment(data) {
  // Update your database
  // Send confirmation email
  // Update user account
  console.log("Payment successful:", data);
}

async function handleFailedPayment(data) {
  // Log failed payment
  // Notify relevant parties
  console.log("Payment failed:", data);
}
