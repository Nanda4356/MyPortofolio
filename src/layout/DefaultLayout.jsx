import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen w-full bg-base-100 text-base-content">
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
}