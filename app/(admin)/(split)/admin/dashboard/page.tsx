"use client";

import { useQuery } from "react-query";

export default function Page() {
  const { isLoading, data, isFetching } = useQuery("getPayment", async () => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    let response = await fetch("/api/get/getTransactions", {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    return data;
  });

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Payout ID</th>
              <th>Currency</th>
              <th>Amount(Satoshi)</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {isLoading || isFetching ? (
              <tr>
                <td colSpan={6} className="text-center">
                  <div className="spinner-border" role="status">
                    Please wait while we load all payment transaction
                  </div>
                </td>
              </tr>
            ) : (
              data.data.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item.payout_id}</td>
                  <td>
                    {
                      item.currency_transaction_table_currencyTocurrency
                        .currency_code
                    }
                  </td>
                  <td>{item.amount}</td>
                  <td>{item.to_user}</td>
                  <td>{`${item.status == 200 ? "Sent" : "Failed"}`}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
