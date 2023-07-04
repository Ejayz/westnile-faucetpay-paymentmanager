"use client";
import { ToastContainer } from "react-toastify";
import "../../../globals.css";
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
        <div className="bg-base-100 w-full h-full">
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">
                Westnile Payment Manager
              </a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link
                    href={{
                      pathname: "/admin/dashboard",
                    }}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/admin/payment",
                    }}
                  >
                    Send Payment
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/admin/currency",
                    }}
                  >
                    New Currency
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/admin/changepassword",
                    }}
                  >
                    Change Password{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/admin/history",
                    }}
                  >
                    Transaction History
                  </Link>
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
        </div>
      </body>
    </html>
  );
}
