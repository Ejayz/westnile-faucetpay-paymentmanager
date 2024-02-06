"use client";
import { ToastContainer } from "react-toastify";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
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
                        pathname: "/login",
                      }}
                    >
                      Login
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
        </QueryClientProvider>
      </body>
    </html>
  );
}
