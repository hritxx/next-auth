"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { buttonStyles, inputStyles } from "@/helpers/styles";

const SigninPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSignin = async () => {};

  return (
    <div className="flex items-center justify-center p-4 flex-col px-12 py-12">
      <h1 className="text-lg font-bold text-gray-400">Signin Page</h1>

      <label htmlFor="username" className="font-semibold p-3">
        Email
      </label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter Email"
        className={inputStyles}
      />
      <label htmlFor="username" className="font-semibold p-3">
        Password
      </label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter Username"
        className={inputStyles}
      />
      <button type="submit" className={buttonStyles}>
        SignIn
      </button>
      <Link href="/signup" className="text-green-600 hover:text-green-300">
        Not a user? Register here.
      </Link>
    </div>
  );
};

export default SigninPage;
