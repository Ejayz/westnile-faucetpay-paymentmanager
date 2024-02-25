"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { changePassword } from "@/hooks/useChangePassword";
import { useMutation, useQuery } from "react-query";

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, isLoading, isFetching, refetch } = useQuery(
    "getAutoWithdraw",
    async () => {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
      };

      let response = await fetch("/api/get/autoWithdraw", {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();
      return data;
    }
  );
  const updateAutoWithdraw = useMutation({
    mutationKey: "updateAutoWithdraw",
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

      let response = await fetch("/api/post/updateAutoWithdraw", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

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
      refetch();
      setIsSubmitting(false);
      toast.error("An error occured, please try again");
    },
  });

  const updateMaintenanceMiner = useMutation({
    mutationKey: "updateMaintenanceMiner",
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

      let response = await fetch("/api/post/updateMinerMaintenance", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

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
      refetch();
      setIsSubmitting(false);
      toast.error("An error occured, please try again");
    },
  });

  return (
    <>
      <div className="mx-auto my-4 card w-96 bg-neutral text-neutral-content">
        <div className="items-center my-2 text-center card-body">
          <h2 className="card-title">Auto Withdrawal</h2>
          {isLoading || isFetching ? (
            <span className="loading loading-ring loading-lg"></span>
          ) : (
            <input
              onChange={(event: any) => {
                if (
                  confirm("Are you sure you want to confirm this transaction?")
                ) {
                  updateAutoWithdraw.mutate({
                    status: event.target.checked,
                  });
                }
              }}
              checked={isLoading || isFetching ? false : data.data.auto_withdaw}
              type="checkbox"
              className={`toggle ${
                isLoading || isFetching ? "toggle--disabled" : "toggle-success"
              }`}
            />
          )}
        </div>
      </div>
      <div className="mx-auto my-4 card w-96 bg-neutral text-neutral-content">
        <div className="items-center my-2 text-center card-body">
          <h2 className="card-title">Miner Maintenance Mode</h2>
          {isLoading || isFetching ? (
            <span className="loading loading-ring loading-lg"></span>
          ) : (
            <input
              onChange={(event: any) => {
                if (
                  confirm("Are you sure you want to turn on Miner Maintenance Mode?")
                ) {
                  updateMaintenanceMiner.mutate({
                    status: event.target.checked,
                  });
                }
              }}
              checked={
                isLoading || isFetching ? false : data.data.minner_maintenance
              }
              type="checkbox"
              className={`toggle ${
                isLoading || isFetching ? "toggle--disabled" : "toggle-success"
              }`}
            />
          )}
        </div>
      </div>
    </>
  );
}
