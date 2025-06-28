"use client";

import { AuthLayout } from "@/app/components/auth/AuthLayout";
import { AuthForm } from "@/app/components/auth/AuthForm";
import { register } from "@/app/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const { token } = await register(data);
      localStorage.setItem("devcanvas_token", token);
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create a new account"
      linkText="Already have an account? Sign in"
      linkHref="/login"
    >
      <AuthForm type="register" onSubmit={handleSubmit} isLoading={isLoading} />
    </AuthLayout>
  );
}
