"use client";

import { signinAccount } from "@/app/auth/actions";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: null,
};

const Signin = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(signinAccount as any, initialState);

  return (
    <div>
      {state?.message && (
        <span className="rounded-lg bg-red-400 w-full block py-3 mb-4 text-center text-md font-medium antialiased text-black">
          {state?.message}
        </span>
      )}
      <h1 className="text-neutral-900 font-bold text-2xl antialiased mb-1">
        Welcome Back &#127881;
      </h1>
      <p className="text-neutral-600 text-sm font-medium antialiased mb-4">
        Enter your email below to login your account
      </p>
      <form action={formAction} className="w-full">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <a
          href="#"
          className="underline block text-sm font-medium antialiased text-gray-900 mb-4"
        >
          Forgot Password?
        </a>
        <button
          aria-disabled={pending}
          disabled={pending}
          type="submit"
          className="block min-w-full text-white bg-black hover:opacity-80 transition-all focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signin;
