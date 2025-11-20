import { z } from "zod";

export const signInSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 8 characters long"),
});

export const signUpSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[A-Z])(?=.*\d).*$/,
      "Password must contain at least one uppercase letter and one number"
    ),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});
