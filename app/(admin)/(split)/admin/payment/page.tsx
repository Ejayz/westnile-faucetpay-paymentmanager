"use client";

import { sendPayment } from "@/hooks/usePayment";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

export default function Page() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      address: "",
      amount: 0,
      currency: "",
      refferal: false,
    },
  });
  const [submitting, setSubmitting] = useState(false);

  const { isLoading, data, isFetching } = useQuery("getPayment", async () => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    let response = await fetch("/api/get/getCurrency", {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    return data;
  });

  const SendPayment = async (data: any) => {
    setSubmitting(true);
    const address = data.address;
    const amount = data.amount;
    const currency = data.currency;
    const refferal = data.refferal;
    try {
      const returned = await sendPayment(amount, currency, refferal, address);
      if (returned.code == 200) {
        toast.success("Payment sent successfully!");
        setSubmitting(false);
        reset();
      } else {
        toast.error(returned.message);
        setSubmitting(false);
      }
    } catch (e) {
      toast.error("Something went wrong!");
      setSubmitting(false);
    }
  };

  if (isLoading || isFetching) {
    return (
      <>
        <span className="text-error">Please wait</span>
      </>
    );
  }
  {
    return (
      <>
        <div className="alert alert-info w-3/4 mx-auto mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <span>
            Please fill out this form . Everything with <b>*</b> is required.
          </span>
        </div>
        <form
          onSubmit={handleSubmit(SendPayment)}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-6"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Crypto Address *</span>
              </label>
              <input
                type="text"
                placeholder="Crypto Address"
                className="input input-bordered my-2"
                {...register("address", {
                  required: "This is required.",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="address"
                render={({ message }) => (
                  <div className="text-error flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
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
                <span className="label-text">
                  Amount <span className="text-error">( In Satoshi )</span> *
                </span>
              </label>
              <input
                type="number"
                placeholder="Amount"
                step={0.01}
                className="input input-bordered my-2"
                {...register("amount", {
                  required: "This is required.",
                  validate: (value) =>
                    value > 0 || "Amount must be greater than 0",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="amount"
                render={({ message }) => (
                  <div className="text-error flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
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
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Currency *</span>
              </label>
              <select
                {...register("currency", {
                  required: true,
                  pattern: {
                    value: /[^0]/,
                    message: "Please select a currency",
                  },
                })}
                defaultValue={0}
                className="select select-bordered my-2"
              >
                <option value="0">Choose Currency</option>
                {
                  <>
                    {data.data.map((currency: any, index: number) => (
                      <option key={index} value={currency.id}>
                        {currency.currency_name}
                      </option>
                    ))}
                  </>
                }
              </select>
              <ErrorMessage
                errors={errors}
                name="currency"
                render={({ message }) => (
                  <div className="text-error flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
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
              <label className="label cursor-pointer">
                <span className="label-text">Refferal</span>
                <input
                  type="checkbox"
                  {...register("refferal")}
                  className="checkbox my-2 tooltip "
                  data-tip="Is this a refferal or normal payment"
                />
              </label>
              <ErrorMessage
                errors={errors}
                name="refferal"
                render={({ message }) => (
                  <div className="text-error flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0 h-6 w-6"
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

            <div className="form-control mt-6">
              <button
                className={`btn  ${submitting ? "btn-neutral" : "btn-primary"}`}
              >
                {submitting ? (
                  <>
                    <span>Sending Payment</span>{" "}
                    <div
                      className={`${
                        submitting ? "loading loading-dots loading-sm" : ""
                      }`}
                    ></div>{" "}
                  </>
                ) : (
                  <span>Send Payment</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
