"use client";

import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignInOut = () => {
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    const logOut = () => {
        setAuth(null);
        router.push("/login");
    };

    return (
        <div>
            {auth ? (
                <div>
                    <span>{auth.name}</span> <span> | </span>
                    <a className="cursor-pointer" onClick={logOut}>
                        Log out
                    </a>
                </div>
            ) : (
                <Link href={"/login"}>Login</Link>
            )}
        </div>
    );
};

export default SignInOut;
