"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <form className="bg-white p-8 rounded-2xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <button
          className="
          w-full
          bg-blue-600
          text-white
          py-3
          rounded-xl
          "
        >
          Login
        </button>

      </form>

    </div>
  );
}
