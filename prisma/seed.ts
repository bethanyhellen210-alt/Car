import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.car.create({
    data: {
      title: "BMW X5 2022",
      price: 65000,
      make: "BMW",
      model: "X5",
      year: 2022,
      country: "Germany",
      mileage: 30000,
      description: "Excellent condition",
    },
  });

  await prisma.car.create({
    data: {
      title: "Toyota Land Cruiser",
      price: 78500,
      make: "Toyota",
      model: "Land Cruiser",
      year: 2023,
      country: "UAE",
      mileage: 25000,
      description: "Premium SUV",
    },
  });
}

main();
