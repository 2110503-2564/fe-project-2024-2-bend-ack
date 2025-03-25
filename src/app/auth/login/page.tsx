"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        if (result?.error) {
            setError("Invalid credentials, please try again.");
        } else {
            window.location.href = "/";
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-xl font-bold">Sign In</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border p-2"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border p-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2">
                    Login
                </button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
}
