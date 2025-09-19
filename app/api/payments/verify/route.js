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

    if (!response.ok) {
      const errorText = await response.text();
      return Response.json(
        {
          success: false,
          message: "Failed to verify payment with Paystack",
          error: errorText,
        },
        { status: response.status }
      );
    }

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
          message: data.data?.gateway_response || "Payment verification failed",
          status: data.data?.status,
        },
        { status: 400 }
      );
    }
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Internal server error",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
