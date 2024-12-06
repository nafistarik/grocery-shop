export default function AdminLayout({ children }) {
    return (
      <div className="min-h-screen flex">
        <aside className="w-64 bg-green-500 text-white p-4">
          <nav>
            <ul>
              <li><a href="/admin" className="block py-2">Dashboard</a></li>
              <li><a href="/admin/upload" className="block py-2">Upload Products</a></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </div>
    );
  }
  