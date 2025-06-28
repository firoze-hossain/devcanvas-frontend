"use client";

import { AuthLayout } from "@/app/components/auth/AuthLayout";
import { AuthForm } from "@/app/components/auth/AuthForm";
import { login } from "@/app/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const { token } = await login(data);
      localStorage.setItem("devcanvas_token", token);
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Sign in to your account"
      linkText="Don't have an account? Sign up"
      linkHref="/register"
    >
      <AuthForm type="login" onSubmit={handleSubmit} isLoading={isLoading} />
    </AuthLayout>
  );
}
