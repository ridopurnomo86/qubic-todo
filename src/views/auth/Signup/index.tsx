"use client";

import Link from "next/link";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createAccount } from "@/app/auth/actions";

const initialState = {
  message: null,
};

const Signup = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createAccount as any, initialState);

  return (
    <div>
      {state?.message && (
        <div className="rounded-lg bg-red-400 w-full block py-3 mb-4 text-center text-md font-medium antialiased text-black">
          {state?.message}
        </div>
      )}
      <h1 className="text-neutral-900 font-bold text-2xl antialiased mb-1">
        Create your account.
      </h1>
      <p className="text-neutral-600 text-sm font-medium antialiased mb-4">
        Welcome to Todo. Lets create your account
      </p>
      <form action={formAction} className="w-full">
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe98"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
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
            className="block mb-2 text-sm font-medium text-gray-900"
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
        <p className="mt-4 text-sm text-neutral-600 font-medium antialiased mb-4">
          By clicking &quot;Signup&quot;, you acknowledge that you have read and
          accept the&nbsp;
          <Link href="#">
            <span className="text-cyan-600">Terms of Service</span>
          </Link>
          &nbsp; and&nbsp;
          <Link href="#">
            <span className="text-cyan-600">Privacy Policy</span>
          </Link>
          .
        </p>
        <button
          aria-disabled={pending}
          disabled={pending}
          type="submit"
          className="block min-w-full text-white bg-black hover:opacity-80 transition-all focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
