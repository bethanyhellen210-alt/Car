import Link from "next/link";

export default function AdminCarsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between mb-8">

        <h1 className="text-4xl font-bold">
          Cars
        </h1>

        /admin/cars/new
          Add Car
        </Link>

      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4">Car</th>
              <th>Price</th>
              <th>Country</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="p-4">BMW X5</td>
              <td>$65,000</td>
              <td>Germany</td>
              <td>Available</td>

              <td>
                Edit | Delete
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
