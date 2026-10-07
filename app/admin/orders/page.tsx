export default function OrdersAdmin() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Orders
      </h1>

      <table className="w-full">

        <thead>
          <tr>
            <th>Order</th>
            <th>Status</th>
            <th>Tracking</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>BMW X5</td>
            <td>Processing</td>
            <td>DHL123456789</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}
