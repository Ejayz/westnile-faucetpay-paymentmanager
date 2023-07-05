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
    },
  });
  const OnSubmit = async (data: any) => {
    setSubmitting(true);
    const currency_name = data.currency_name;
    const currency_code = data.currency_code;

    const returned = await AddToken(currency_name, currency_code);
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
        onSubmit={handleSubmit(OnSubmit)}
        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-6"
      >
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Currency Name *</span>
            </label>
            <input
              type="text"
              placeholder="Crypto Name"
              className="input input-bordered my-2"
              {...register("currency_name", {
                required: "This is required.",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="currency_name"
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
              <span className="label-text">Currency Code *</span>
            </label>
            <input
              type="text"
              placeholder="Currency Code"
              className="input input-bordered my-2"
              {...register("currency_code", {
                required: "This is required.",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="currency_code"
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
