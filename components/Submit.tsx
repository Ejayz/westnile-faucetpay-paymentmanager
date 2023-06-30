import { useIsSubmitting } from "remix-validated-form";

export const MySubmitButton = () => {
  const isSubmitting = useIsSubmitting();
  return (
    <button type="submit" disabled={isSubmitting} className="btn btn-primary">
      {" "}
      {isSubmitting ? "Logging in...." : "Login"}
    </button>
  );
};
