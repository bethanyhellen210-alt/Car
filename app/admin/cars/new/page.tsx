export default function AddCarPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Add Vehicle
      </h1>

      <form className="space-y-5">

        <input
          placeholder="Vehicle Title"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="Price"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="Make"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="Model"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="Year"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="Country"
          className="w-full border p-3 rounded-xl"
        />

        <textarea
          placeholder="Description"
          rows={5}
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="file"
          multiple
          className="w-full"
        />

        <input
          type="file"
          multiple
          accept="video/*"
          className="w-full"
        />

        <button
          className="
          bg-blue-600
          text-white
          px-8
          py-3
          rounded-xl
          "
        >
          Save Vehicle
        </button>

      </form>
    </div>
  );
}
