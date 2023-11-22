"use client";
import { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const Auth = () => {
  const [authType, setAuthType] = useState<"signin" | "signup">("signin");

  return (
    <main className="mx-auto container relative min-h-screen flex items-center justify-center">
      <div className="w-[500px] flex flex-col items-center">
        <div className="w-full">
          <h1 className="text-3xl text-neutral-900 antialiased font-bold mb-4">
            Todo 📝
          </h1>
          <div className="flex w-full rounded-lg">
            <button
              className={`w-full m-2 py-2 rounded-lg ${
                authType === "signin" ? "bg-white shadow" : "bg-transparent"
              } transition-all font-medium text-black`}
              onClick={() => setAuthType("signin")}
            >
              Sign in
            </button>
            <button
              className={`w-full m-2 py-2 rounded-lg ${
                authType === "signup" ? "bg-white shadow" : "bg-transparent"
              } transition-all font-medium text-black`}
              onClick={() => setAuthType("signup")}
            >
              Sign up
            </button>
          </div>
          <div className="p-8 bg-white w-full rounded-lg shadow mt-4">
            {authType === "signin" ? <Signin /> : <Signup />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
