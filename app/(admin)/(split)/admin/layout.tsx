"use client";
import { ToastContainer } from "react-toastify";
import "../../../../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!document.cookie.includes("auth")) {
      window.location.href = "/?error=401";
    }
  }, []);

  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="w-full h-full bg-base-100">
            <div className="navbar bg-base-100">
              <div className="flex-1">
                <a className="text-xl normal-case btn btn-ghost">
                  Westnile Payment Manager
                </a>
              </div>
              <div className="flex-none">
                <ul className="px-1 menu menu-horizontal">
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
                        pathname: "/admin/miner_transaction",
                      }}
                    >
                      Miner Transaction
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
                        pathname: "/admin/setting",
                      }}
                    >
                     Setting
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        document.cookie =
                          "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        window.location.href = "/";
                      }}
                    >
                      Logout
                    </button>
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
