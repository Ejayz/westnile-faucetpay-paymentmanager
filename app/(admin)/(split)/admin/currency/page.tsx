"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AddToken } from "@/hooks/useToken";

export default function Page() {
  const [submitting, setSubmitting] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
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
    const rate= Number(data.rate);
    const per_hash = Number(data.per_hash);
    console.log(currency_name, currency_code,rate,per_hash)
    const returned = await AddToken(currency_name, currency_code,rate,per_hash);
    if (returned.code == 200) {
      toast.success("Token added successfully!");
      setSubmitting(false);
      reset();
    } else {
      toast.error(returned.message);
      setSubmitting(false);
    }
  };
  return (
    <>
      <div className="w-3/4 mx-auto mt-4 alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-6 h-6 stroke-current shrink-0"
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
        onSubmit={handleSubmit(OnSubmit)}
        className="flex-shrink-0 w-full max-w-sm mx-auto mt-6 shadow-2xl card bg-base-100"
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
            <button
              className={`btn  ${submitting ? "btn-neutral" : "btn-primary"}`}
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
          </div>
        </div>
      </form>
    </>
  );
}
