import { stripe } from "@/lib/stripe";

export async function POST() {
  const session =
    await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",

            product_data: {
              name: "BMW X5",
            },

            unit_amount: 6500000,
          },

          quantity: 1,
        },
      ],

      mode: "payment",

      success_url:
        "http://localhost:3000/success",

      cancel_url:
        "http://localhost:3000/cancel",
    });

  return Response.json({
    url: session.url,
  });
}
