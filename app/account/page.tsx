export default function AccountPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-10">
        My Account
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl">
          My Orders
        </div>

        <div className="bg-white p-6 rounded-2xl">
          Saved Cars
        </div>

        <div className="bg-white p-6 rounded-2xl">
          Addresses
        </div>

        <div className="bg-white p-6 rounded-2xl">
          Settings
        </div>

      </div>

    </div>
  );
}
