"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AddToken } from "@/hooks/useToken";
import { useQuery } from "react-query";

export default function Page() {
  const [submitting, setSubmitting] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
    setValue,
    getValues,
  } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      id: 0,
      currency_name: "",
      currency_code: "",
      rate: "",
      per_hash: "",
    },
  });
  const OnSubmit = async (data: any) => {
    setSubmitting(true);
    const currency_name = data.currency_name;
    const currency_code = data.currency_code;
    const rate = Number(data.rate);
    const per_hash = Number(data.per_hash);
    console.log(currency_name, currency_code, rate, per_hash);
    const returned = await AddToken(
      currency_name,
      currency_code,
      rate,
      per_hash
    );
    if (returned.code == 200) {
      CurrencyRefetch();
      toast.success("Token added successfully!");
      setSubmitting(false);
      reset();
    } else {
      CurrencyRefetch;
      toast.error(returned.message);
      setSubmitting(false);
    }
  };

  const {
    data: CurrencyData,
    isLoading: CurrencyLoading,
    isFetching: CurrencyFetching,
    refetch: CurrencyRefetch,
  } = useQuery("getCurrency", async () => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let response = await fetch("/api/get/getCurrency", {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    return data;
  });
  const OnUpdate = async (data: any) => {
    setSubmitting(true);
    const currency_name = data.currency_name;
    const currency_code = data.currency_code;
    const rate = Number(data.rate);
    const per_hash = Number(data.per_hash);
    console.log(currency_name, currency_code, rate, per_hash);
    const response = await fetch("/api/post/updateToken", {
      method: "POST",
      body: JSON.stringify({
        id: data.id,
        currency_name: currency_name,
        currency_code: currency_code,
        rate: rate,
        per_hash: per_hash,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datas = await response.json();
    if (datas.code == 200) {
      CurrencyRefetch();
      toast.success("Token updated successfully!");
      setSubmitting(false);
      reset();
    } else {
      CurrencyRefetch;
      toast.error(datas.message);
      setSubmitting(false);
    }
  };
  const OnRemove = async (data: any) => {
    setIsRemove(true);
    const response = await fetch("/api/post/removeToken", {
      method: "POST",
      body: JSON.stringify({
        id: data.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datas = await response.json();
    if (datas.code == 200) {
      CurrencyRefetch();
      toast.success("Token updated successfully!");
     setIsRemove(false);
      reset();
    } else {
      CurrencyRefetch;
      toast.error(datas.message);
      setIsRemove(false);
    }
  };
  return (
    <div className="flex flex-row">
      <form
        onSubmit={(event: any) => {}}
        className="flex-shrink-0 w-1/2 max-w-sm mx-auto mt-6 shadow-2xl card bg-base-100"
      >
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Currency Name *</span>
            </label>
            <input
              type="text"
              placeholder="Crypto Name"
              className="my-2 input input-bordered"
              {...register("currency_name", {
                required: "This is required.",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="currency_name"
              render={({ message }) => (
                <div className="flex flex-row text-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 stroke-current shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{message}</span>
                </div>
              )}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Currency Code *</span>
            </label>
            <input
              type="text"
              placeholder="Currency Code"
              className="my-2 input input-bordered"
              {...register("currency_code", {
                required: "This is required.",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="currency_code"
              render={({ message }) => (
                <div className="flex flex-row text-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 stroke-current shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{message}</span>
                </div>
              )}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Per Hash *</span>
            </label>
            <input
              type="text"
              placeholder="Per Hash"
              className="my-2 input input-bordered"
              {...register("per_hash", {
                required: "This is required.",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="per_hash"
              render={({ message }) => (
                <div className="flex flex-row text-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 stroke-current shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{message}</span>
                </div>
              )}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rate *</span>
            </label>
            <input
              type="text"
              placeholder="Rate"
              className="my-2 input input-bordered"
              {...register("rate", {
                required: "This is required.",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="rate"
              render={({ message }) => (
                <div className="flex flex-row text-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 stroke-current shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{message}</span>
                </div>
              )}
            />
          </div>
          <div className="mt-6 form-control">
            {isUpdate ? (
              <>
                <button
                  type="button"
                  className={`btn my-2  ${
                    submitting ? "btn-disabled" : "btn-primary"
                  }`}
                  onClick={() => {
                    OnUpdate({
                      id: getValues("id"),
                      currency_name: getValues("currency_name"),
                      currency_code: getValues("currency_code"),
                      rate: getValues("rate"),
                      per_hash: getValues("per_hash"),
                    });
                    setIsUpdate(false);
                  }}
                >
                  {submitting ? (
                    <>
                      <span>Updating Token</span>{" "}
                      <div
                        className={`${
                          submitting ? "loading loading-dots loading-sm" : ""
                        }`}
                      ></div>{" "}
                    </>
                  ) : (
                    <span>Update Token</span>
                  )}
                </button>
                <button
                  type="button"
                  className="my-2 btn"
                  onClick={() => {
                    setIsUpdate(false);
                    reset();
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => {
                  handleSubmit(OnSubmit)();
                }}
                className={`btn  ${
                  submitting ? "btn-disabled" : "btn-primary"
                }`}
              >
                {submitting ? (
                  <>
                    <span>Adding Token</span>{" "}
                    <div
                      className={`${
                        submitting ? "loading loading-dots loading-sm" : ""
                      }`}
                    ></div>{" "}
                  </>
                ) : (
                  <span>Add Token</span>
                )}
              </button>
            )}
          </div>
        </div>
      </form>
      <div className="w-1/2 overflow-x-auto text-center">
        <h1 className="text-2xl font-bold">Currency</h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Currency Name</th>
              <th>Currency Code</th>
              <th>Per Hash</th>
              <th>Rate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {CurrencyLoading || CurrencyFetching ? (
              <tr>
                <td colSpan={5} className="text-center">
                  Loading...
                </td>
              </tr>
            ) : CurrencyData?.data?.length > 0 ? (
              CurrencyData?.data?.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.currency_name}</td>
                  <td>{item.currency_code}</td>
                  <td>{item.per_hash}</td>
                  <td>{item.rate}</td>
                  <td className="flex flex-row ">
                    <button
                      className="mx-2 my-2 btn btn-sm btn-info"
                      onClick={() => {
                        setIsUpdate(true);
                        setValue("id", item.id);
                        setValue("currency_name", item.currency_name);
                        setValue("currency_code", item.currency_code);
                        setValue("rate", item.rate);
                        setValue("per_hash", item.per_hash);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className={`mx-2 my-2 btn btn-sm ${isRemove? "btn-disabled" : "btn-error"}`}
                      onClick={() => {
                        OnRemove({ id: item.id });
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
