import * as zod from "zod";

const passwordValidation = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/
);

export const LoginSchema = zod.object({
  email: zod
    .string({
      invalid_type_error: "Must be a string",
    })
    .email({ message: "Email is required" }),
  password: zod.string().min(1, { message: "Password is required" }),
});
