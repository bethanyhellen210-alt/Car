export default function CheckoutPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        Delivery Details
      </h1>

      <form className="space-y-4">

        <input
          placeholder="Full Name"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="Street Address"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="City"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="ZIP / Postal Code"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="Country"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="Phone"
          className="w-full border p-3 rounded-xl"
        />

        <button className="bg-blue-600 text-white py-3 px-6 rounded-xl">
          Continue To Payment
        </button>

      </form>

    </div>
  );
}
