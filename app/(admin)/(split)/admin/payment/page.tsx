"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

export default function Page() {
  const {
    handleSubmit,
    register,
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

  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Crypto Address</span>
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
            <span className="label-text">Amount</span>
          </label>
          <input
            type="number"
            placeholder="Amount"
            step={0.01}
            className="input input-bordered my-2"
            {...register("amount", {
              required: "This is required.",
              validate: (value) => value > 0 || "Amount must be greater than 0",
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
            <span className="label-text">Currency</span>
          </label>
          <select
            {...register("currency")}
            defaultValue={""}
            className="select select-bordered my-2"
          >
            <option disabled value="">
              Choose Currency
            </option>
            <option value="BCH">Bitcoin Cash</option>
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
          <button className="btn btn-primary">Send Payment</button>
        </div>
      </div>
    </div>
  );
}
