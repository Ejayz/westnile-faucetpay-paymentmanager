"use client";
import { ToastContainer } from "react-toastify";
import "../../../../globals.css";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useEffect } from "react";

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!document.cookie.includes("auth")) {
      window.location.href = "/login?error=401";
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  href={{
                    pathname: "/admin/dashboard/payment",
                  }}
                >
                  {" "}
                  Send Payment{" "}
                </Link>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100">
                    <li></li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
        />
        {children}
      </body>
    </html>
  );
}
