"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { inputStyles } from "@/helpers/styles";
import { buttonStyles } from "@/helpers/styles";

const SignupPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex items-center justify-center p-4 flex-col px-12 py-12">
      <h1 className="text-lg font-bold text-gray-400">Signup Page</h1>
      <label htmlFor="username" className="font-semibold p-3">
        Username
      </label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
        className={inputStyles}
      />
      <label htmlFor="username" className="font-semibold p-3">
        Email
      </label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
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
        placeholder="Password"
        className={inputStyles}
      />
      <button type="submit" className={buttonStyles}>
        SignUp
      </button>
      <Link href="/signin" className="text-green-600 hover:text-green-300">
        Already a user? Signin here.
      </Link>
    </div>
  );
};

export default SignupPage;
