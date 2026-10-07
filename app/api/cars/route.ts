import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();

  const car = await prisma.car.create({
    data: {
      title: body.title,
      price: Number(body.price),
      make: body.make,
      model: body.model,
      year: Number(body.year),
      country: body.country,
      description: body.description,
    },
  });

  return Response.json(car);
}
