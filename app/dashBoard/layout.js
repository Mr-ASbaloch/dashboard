// import Navbar from "../components/navbar";
// import Sidebar from "../components/sideBar";

// export default function Layout({ children }) {
//   return (
//     <>
//       <Navbar />
//       <Sidebar />
//       {children}
//     </>
//   );
// }

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
