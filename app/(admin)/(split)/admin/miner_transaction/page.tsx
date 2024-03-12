"use client";

import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isLoading, data, isFetching, refetch } = useQuery(
    "getPayment",
    async () => {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
      };

      let response = await fetch("/api/get/MinnerTransactions", {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();
      return data;
    }
  );

  const transactionConfirmMutate = useMutation({
    mutationKey: "transactionConfirm",
    mutationFn: async (values: any) => {
      setIsSubmitting(true);
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        transactionId: values.transactionId,
        status: values.status,
        to_user: values.to_user,
      });

      let response = await fetch(
        "/api/post/confirmTransaction",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      let data = await response.json();
      return data;
    },
    onSuccess: (data: any) => {
      setIsSubmitting(false);
      refetch();
      if (data.code == 200) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error: any) => {
      setIsSubmitting(false);
      refetch();
      toast.error("An error occured, please try again");
    },
  });
  const transactionDenyMutation = useMutation({
    mutationKey: "transactionDeny",
    mutationFn: async (values: any) => {
      setIsSubmitting(true);
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        transactionId: values.transactionId,
        balance_hash: values.balance_hash,
        minner_id: values.minner_id,
      });

      let response = await fetch(
        "/api/post/denyTransaction",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      let data = await response.json();
      return data;
    },
    onSuccess: (data: any) => {
      setIsSubmitting(false);
      refetch();
      if (data.code == 200) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error: any) => {
      setIsSubmitting(false);
      refetch();
      toast.error("An error occured, please try again");
    },
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
              <th>Balance Hash</th>
              <th>Per Hash</th>
              <th>Rate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading || isFetching ? (
              <tr>
                <td colSpan={8} className="text-center">
                  <div className="spinner-border" role="status">
                    Please wait while we load all payment transaction
                  </div>
                </td>
              </tr>
            ) : data.data.length == 0 ? (
              <tr>
                <td colSpan={8} className="text-center">
                  No withdrawal request available at the moment...
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
                  <td>{item.hash_number} Hashes</td>
                  <td>
                    {
                      item.currency_transaction_table_currencyTocurrency
                        .per_hash
                    }{" "}
                    Hashes
                  </td>
                  <td>
                    {item.currency_transaction_table_currencyTocurrency.rate}{" "}
                    Satoshi
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        if (
                          confirm(
                            "Are you sure you want to confirm this transaction?"
                          )
                        ) {
                          transactionConfirmMutate.mutate({
                            transactionId: item.id,
                            status: item.status,
                            to_user: item.to_user,
                          });
                        }
                      }}
                      className={`mx-2 btn btn-sm ${
                        isSubmitting ? "btn-disabled" : "btn-info"
                      }`}
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => {
                        if (
                          confirm(
                            "Are you sure you want to deny this transaction?"
                          )
                        ) {
                          transactionDenyMutation.mutate({
                            transactionId: item.id,
                            balance_hash: item.hash_number,
                            minner_id: item.minner_id,
                          });
                        }
                      }}
                      className={`mx-2 btn btn-sm ${
                        isSubmitting ? "btn-disabled" : "btn-error"
                      }`}
                    >
                      Denied
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
