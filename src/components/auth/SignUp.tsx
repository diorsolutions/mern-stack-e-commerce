"use client";

import { useActionState } from "react";
import From from "next/form";
import { Loader2 } from "lucide-react";

const initialState = {
  message: "",
};

type SignUpProps = {
  action: (
    prevState: unknown,
    formData: FormData
  ) => Promise<{ message: string } | undefined>;
};

const SignUp = ({ action }: SignUpProps) => {
  const [state, formAction, isPending] = useActionState(action, initialState);
  return (
    <>
      <From
        action={formAction}
        className="max-w-md mx-auto p-8 my-16 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold text-center mb-2">
          Join the community
        </h1>
        <p className="text-center text-sm  text-rose-400 font-semibold mb-2.5">
          🔥 LIMITED TIME OFFER 🔥
        </p>
        <p className="text-center text-sm  text-gray-700 font-semibold mb-2.5">
          Sign Up now and get 90% off on your first order
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>{" "}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {state?.message && (
            <p className="text-red-500 text-sm">{state.message}</p>
          )}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin inline-block mr-2" />
                <span>Signing Up...</span>
              </>
            ) : (
              // Normal button content
              "Sign Up"
            )}
          </button>
        </div>
        <div className="space-y-3">
          {/* copywriting section here */}
          <p className="text-center text-sm text-gray-500 mt-4">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
          <p className="text-center text-sm text-gray-500 mt-2">
            Already have an account?{" "}
            <a href="/auth/sign-in" className="text-blue-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </From>
    </>
  );
};

export default SignUp;
