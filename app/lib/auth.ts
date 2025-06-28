import { api } from "./api";
import { AuthResponse, AuthRequest } from "@/types/auth";

export const register = async (data: AuthRequest): Promise<AuthResponse> => {
  return api.post("/register", data);
};

export const login = async (data: AuthRequest): Promise<AuthResponse> => {
  return api.post("/authenticate", data);
};

export const storeToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("devcanvas_token", token);
  }
};

export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("devcanvas_token");
  }
  return null;
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("devcanvas_token");
  }
};
