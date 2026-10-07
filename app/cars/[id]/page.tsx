interface Props {
  params: {
    id: string;
  };
}

export default function CarDetails({ params }: Props) {
  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            BMW X5 2022
          </h1>

          <p className="text-blue-600 text-3xl font-bold mt-3">
            $65,000
          </p>

          <div className="space-y-3 mt-6">
            <p>Country: Germany</p>
            <p>Mileage: 30,000 KM</p>
            <p>Fuel: Diesel</p>
            <p>Transmission: Automatic</p>
          </div>

          <button
            className="
            mt-8
            bg-blue-600
            text-white
            px-8
            py-4
            rounded-xl
            "
          >
            Buy Now
          </button>
        </div>

      </div>

    </div>
  );
}
