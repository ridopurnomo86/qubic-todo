"use server";

import instance from "@/lib/fetch/instance";
import { signinFormSchema, signupFormSchema } from "@/lib/validations/form";
import { cookies } from "next/headers";

export const createAccount = async (prevState: any, formData: FormData) => {
  const parsed = signupFormSchema.safeParse({
    username: formData.get("username"),
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success)
    return {
      message: `${parsed?.error.issues?.[0].message} (${parsed?.error.issues?.[0].path?.[0]})`,
    };

  const res = await instance
    .post("/auth/signup", {
      username: formData.get("username"),
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    })
    .then((res) => {
      if (res.data?.message === "success")
        return { message: "success", type: "success" };
      return { message: "Something gone wrong", type: "error" };
    })
    .catch((err) => {
      const error = err.response?.data?.errors;
      const keys = Object.keys(error);
      const message = Object.values(error)[0];

      if (error && keys) return { message };

      return { message: err.response?.data?.errors };
    });

  if (!res) return { message: "Something gone wrong" };

  return res;
};

export const signinAccount = async (prevState: any, formData: FormData) => {
  const parsed = signinFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success)
    return {
      message: `${parsed?.error.issues?.[0].message} (${parsed?.error.issues?.[0].path?.[0]})`,
    };

  const res = await instance
    .post("/auth/signin", {
      username_or_email: formData.get("email"),
      password: formData.get("password"),
    })
    .then((res) => {
      if (res.data) {
        cookies().set("todo_credential", res.data?.token);
        return { message: "Success", type: "success" };
      }
      return { message: "Something gone wrong" };
    })
    .catch((err) => {
      return { message: err.response?.data?.errors };
    });

  if (!res) return { message: "Something gone wrong" };

  return res;
};
