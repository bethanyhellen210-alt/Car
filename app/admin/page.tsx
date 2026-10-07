import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">
          AutoWorld Admin
        </h2>

        <nav className="space-y-4">
          /adminDashboard</Link>
          <br />

          /admin/carsCars</Link>
          <br />

          /admin/ordersOrders</Link>
          <br />

          /admin/usersUsers</Link>
          <br />

          /admin/settingsSettings</Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3>Total Cars</h3>
            <p className="text-3xl font-bold">245</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3>Total Users</h3>
            <p className="text-3xl font-bold">1200</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3>Orders</h3>
            <p className="text-3xl font-bold">89</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3>Revenue</h3>
            <p className="text-3xl font-bold">
              $1.8M
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
