"use client";

import Login from "@/components/auth/Login";
import { useFormik } from "formik";
import * as yup from "yup";
import { signIn } from "../../../../auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { filterFormikErrors } from "@/utils/formikHelpers";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const router = useRouter();

  const {
    values,
    isSubmitting,
    touched,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values, actions) => {
      const signInRes = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (signInRes?.error === "CredentialsSignin") {
        toast.error("Email/Password mismatch!");
      }

      if (!signInRes?.error) {
        router.refresh();
      }
    },
  });

  const errorsToRender = filterFormikErrors(errors, touched, values);

  type valueKeys = keyof typeof values;

  const { email, password } = values;
  const error = (name: valueKeys) => {
    return errors[name] && touched[name] ? true : false;
  };

  return (
    <div>
      <Login
        email={email}
        password={password}
        handleBlur={handleBlur}
        handleChange={handleChange}
        // handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginPage;
