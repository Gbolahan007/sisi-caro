// app/api/payments/verify/route.js
export async function POST(request) {
  try {
    const { reference } = await request.json();

    if (!reference) {
      return Response.json({ error: "Reference is required" }, { status: 400 });
    }

    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (data.status && data.data.status === "success") {
      return Response.json({
        success: true,
        data: data.data,
      });
    } else {
      return Response.json(
        {
          success: false,
          message: "Payment verification failed",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
