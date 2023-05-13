import z from "zod";

const emailValidation = { email: z.string().email("incorrect email") };
const passwordValidation = {
  password: z.string().min(7, "password is too short")
};

export const registerSchema = z
  .object({
    username: z.string().min(3, "Should be at least 3 chars long"),
    ...emailValidation,
    ...passwordValidation,
    repeat_password: z.string()
  })
  .refine((schema) => schema.repeat_password === schema.password, {
    message: "passwords don`t match",
    path: ["repeat_password"]
  });

export type regProps = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  ...emailValidation,
  ...passwordValidation
});
