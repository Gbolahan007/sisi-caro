export async function POST(request) {
  try {
    const { email, amount, metadata } = await request.json();

    // Validate input
    if (!email || !amount) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Initialize payment with Paystack
    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: amount * 100, 
          currency: "NGN",
          callback_url: `${process.env.NEXT_PUBLIC_DOMAIN}/payment/callback`,
          metadata: {
            ...metadata,
            cancel_action: `${process.env.NEXT_PUBLIC_DOMAIN}/payment/cancel`,
          },
        }),
      }
    );

    const data = await response.json();

    if (data.status) {
      return Response.json({
        success: true,
        data: data.data,
      });
    } else {
      return Response.json(
        { error: "Payment initialization failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Payment initialization error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
