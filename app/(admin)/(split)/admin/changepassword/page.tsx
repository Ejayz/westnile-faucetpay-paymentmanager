"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { changePassword } from "@/hooks/useChangePassword";

export default function Page() {
  const [submitting, setSubmitting] = useState(false);
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      password: "",
      newpassword: "",
      repeatpassword: "",
    },
  });
  const OnSubmit = async (data: any) => {
    setSubmitting(true);
    const { password, newpassword } = data;

    const returned = await changePassword(password, newpassword);
    if (returned.code == 200) {
      toast.success(returned.message);
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
              <span className="label-text">Current Password*</span>
            </label>
            <input
              type="password"
              placeholder="Current Password"
              className="input input-bordered my-2"
              {...register("password", {
                required: "This is required.",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
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
              <span className="label-text">New Password *</span>
            </label>
            <input
              type="password"
              placeholder="New Password"
              className="input input-bordered my-2"
              {...register("newpassword", {
                required: "This is required.",
                validate: (value) =>
                  value.length >= 8 || "Password is too short",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="newpassword"
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
              <span className="label-text">Repeat Password *</span>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              className="input input-bordered my-2"
              {...register("repeatpassword", {
                required: "This is required.",
                validate: (value) =>
                  value === watch("newpassword") ||
                  "The passwords do not match",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="repeatpassword"
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
                  <span>Changing Password</span>{" "}
                  <div
                    className={`${
                      submitting ? "loading loading-dots loading-sm" : ""
                    }`}
                  ></div>{" "}
                </>
              ) : (
                <span>Change Password</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
