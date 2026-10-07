import Link from "next/link";

const cars = [
  {
    id: 1,
    title: "BMW X5 2022",
    price: "$65,000",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200",
  },
  {
    id: 2,
    title: "Toyota Land Cruiser 2023",
    price: "$78,500",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
  },
  {
    id: 3,
    title: "Mercedes E-Class",
    price: "$52,000",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200",
  },
];

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-8">
          Available Cars
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >
              {car.image}

              <div className="p-4">
                <h2 className="font-bold text-xl">
                  {car.title}
                </h2>

                <p className="text-blue-600 text-2xl mt-2 font-bold">
                  {car.price}
                </p>

                {`/cars/${car.id}`}
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
