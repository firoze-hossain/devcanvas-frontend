"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "@/app/components/ui/button";

const authSchema = z.object({
  username: z.string().min(2, "Username must be at least 3 characters"),
  password: z.string().min(2, "Password must be at least 6 characters"),
  email: z.string().email().optional(),
});

type AuthFormProps = {
  type: "login" | "register";
  onSubmit: (data: z.infer<typeof authSchema>) => void;
  isLoading: boolean;
};

export const AuthForm = ({ type, onSubmit, isLoading }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {type === "register" && (
        <Input
          label="Email"
          {...register("email")}
          error={errors.email?.message}
          placeholder="your@email.com"
        />
      )}
      <Input
        label="Username"
        {...register("username")}
        error={errors.username?.message}
        placeholder="username"
      />
      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
        placeholder="••••••••"
      />
      <Button type="submit" className="w-full" isLoading={isLoading}>
        {type === "login" ? "Sign In" : "Create Account"}
      </Button>
    </form>
  );
};
