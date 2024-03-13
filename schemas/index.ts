import * as zod from "zod";

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
);

export const LoginSchema = zod.object({
  email: zod
    .string({
      invalid_type_error: "Must be a string",
    })
    .email({ message: "Email is required" }),
  password: zod.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = zod.object({
  email: zod
    .string({
      invalid_type_error: "Must be a string",
    })
    .email({ message: "Email is required" }),
  password: zod
    .string()
    .regex(passwordValidation, {
      message:
        "Password must contain at least one big character, one number and one symbol",
    })
    .min(6, { message: "Password should contain at least 6 characters" }),

  name: zod.string().min(1, {
    message: "Name is required",
  }),
});
