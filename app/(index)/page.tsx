"use client";
import { login } from "@/hooks/useLogin";
import { ErrorMessage } from "@hookform/error-message";
import { useSearchParams } from "next/navigation";
import { type } from "os";
import { use, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
type FormInputs = {
  username: string;
  password: string;
};

export default function Page() {
  const [submitting, setSubmitting] = useState(false);
  const returnCode = useSearchParams()?.get("error");
  const log_in = async (data: FormInputs) => {
    setSubmitting(true);
    const username = data.username;
    const password = data.password;
    try {
      const returned = await login(username, password);
      if (returned.code == 200) {
        toast.success("Login successful!");
        setSubmitting(false);
        window.location.href = "/admin/dashboard";
      } else {
        toast.error(returned.message);
        setSubmitting(false);
      }
    } catch (e) {
      toast.error("Something went wrong!");
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (returnCode == "401") {
      toast.error("You are not authorized to access this page!");
    }
  }, [returnCode]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <form
          onSubmit={handleSubmit(log_in)}
          method="POST"
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <h1 className="text-3xl font-medium leading-tight mb-2">
                Westnile Payment Manager
              </h1>
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
                {...register("username", {
                  required: "This field is required",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="username"
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: "This field is required",
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
            <div className="form-control mt-6">
              <button
                className={`btn  ${submitting ? "btn-neutral" : "btn-primary"}`}
              >
                {submitting ? (
                  <>
                    <span>Logging in</span>{" "}
                    <div
                      className={`${
                        submitting ? "loading loading-dots loading-sm" : ""
                      }`}
                    ></div>{" "}
                  </>
                ) : (
                  <span>Login</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
