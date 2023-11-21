import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signup = () => (
  <main className="mx-auto container relative min-h-screen items-center grid grid-cols-2 gap-16 py-20">
    <div>
      <Image
        src="/assets/person-arranging.png"
        alt="person-arranging"
        width="0"
        height="0"
        sizes="90vw"
        className="w-full h-auto rounded"
      />
    </div>
    <div>
      <h1 className="font-bold mb-4 text-4xl text-neutral-900">Signup</h1>
      <p className="font-medium mb-4 text-md text-neutral-700">
        Already have an account ?&nbsp;
        <Link href="/signin">
          <span className="text-cyan-600">Sign in</span>
        </Link>
      </p>
      <form className="w-full">
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
        <button
          type="submit"
          className="block min-w-full text-white bg-black hover:opacity-80 transition-all focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-neutral-600 font-medium antialiased">
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
    </div>
  </main>
);

export default Signup;
