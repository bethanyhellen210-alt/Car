export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Create Account
        </h1>

        <input
          placeholder="Full Name"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          placeholder="Phone Number"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
          Create Account
        </button>

      </form>

    </div>
  );
}
