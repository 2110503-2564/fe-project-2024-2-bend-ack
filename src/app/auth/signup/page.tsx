"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Select, MenuItem } from "@mui/material";
import signUp from '@/libs/signUp';

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]=useState("");
  const [tel,setTel]=useState("");
  const [role,setRole]=useState("user");

  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const user:UserItem=
        {
            name:name,
            tel:tel,
            email:email,
            password:password,
            role:role
        }
    try{
        await signUp(user);
        console.log("sign up successfully");
        router.push("/api/auth/signIn");
    }     
    catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl text-cyan  mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
          type="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="tel"
          placeholder="phone number"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            variant="standard"
            className="h-[2em] w-[200px] ml-[10px] mb-[20px] mt-[7px]"
        >
            <MenuItem key="user" value="user">user</MenuItem>
            <MenuItem key="admin" value="admin">admin</MenuItem>
        </Select>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
