"use server";
import instance from "@/lib/fetch/instance";
import { signinFormSchema, signupFormSchema } from "@/lib/validations/form";
import { RedirectType, redirect } from "next/navigation";
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

  const res = await instance.post("/auth/signup", {
    username: formData.get("username"),
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (res.data?.message === "success")
    return redirect("/auth", "push" as RedirectType);

  return { message: "Something gone wrong" };
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

  const res = await instance.post("/auth/signin", {
    username_or_email: formData.get("email"),
    password: formData.get("password"),
  });

  if (res.data) {
    cookies().set("todo_credential", res.data?.token);
    return redirect("/dashboard");
  }

  return { message: "Something gone wrong" };
};
