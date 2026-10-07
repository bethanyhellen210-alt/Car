import Image from "next/image";

const cars = [
  {
    id: 1,
    title: "BMW X5 2022",
    price: "$65,000",
    location: "Germany",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200",
  },
  {
    id: 2,
    title: "Toyota Land Cruiser 2023",
    price: "$78,500",
    location: "UAE",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
  },
  {
    id: 3,
    title: "Mercedes E-Class",
    price: "$52,000",
    location: "Germany",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200",
  },
  {
    id: 4,
    title: "Tesla Model 3",
    price: "$48,000",
    location: "Japan",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">
            AutoWorld
          </h1>

          <nav className="hidden md:flex gap-6">
            /Home</a>
            /carsCars</a>
            /aboutAbout</a>
            /contactContact</a>
          </nav>

          <div className="flex gap-3">
            <button className="border px-4 py-2 rounded-xl">
              Login
            </button>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold">
            Find Your Dream Car Worldwide
          </h2>

          <p className="mt-4 text-xl">
            Browse premium vehicles from trusted dealers.
          </p>

          <div className="bg-white mt-10 p-4 rounded-2xl grid md:grid-cols-5 gap-3">
            <input
              placeholder="Make"
              className="border p-3 rounded-xl text-black"
            />

            <input
              placeholder="Model"
              className="border p-3 rounded-xl text-black"
            />

            <input
              placeholder="Country"
              className="border p-3 rounded-xl text-black"
            />

            <input
              placeholder="Price"
              className="border p-3 rounded-xl text-black"
            />

            <button className="bg-blue-600 text-white rounded-xl">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8">
          Featured Cars
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              {car.image}

              <div className="p-5">
                <h4 className="font-bold text-xl">
                  {car.title}
                </h4>

                <p className="text-blue-600 text-2xl font-bold mt-2">
                  {car.price}
                </p>

                <p className="text-gray-500 mt-2">
                  📍 {car.location}
                </p>

                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-center text-3xl font-bold mb-10">
            Why Choose AutoWorld?
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50">
              🌍 Worldwide Delivery
            </div>

            <div className="p-6 rounded-2xl bg-slate-50">
              ✅ Verified Vehicles
            </div>

            <div className="p-6 rounded-2xl bg-slate-50">
              🔒 Secure Payments
            </div>

            <div className="p-6 rounded-2xl bg-slate-50">
              📞 24/7 Support
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold">
            AutoWorld
          </h2>

          <p className="text-slate-400 mt-2">
            Cars Without Borders
          </p>
        </div>
      </footer>
    </main>
  );
}
