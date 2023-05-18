import z from "zod";

const emailValidation = { email: z.string().email("incorrect email") };
const passwordValidation = {
  password: z.string().min(7, "password is too short"),
};

export const registerSchema = z
  .object({
    username: z.string().min(3, "Should be at least 3 chars long"),
    ...emailValidation,
    ...passwordValidation,
    repeat_password: z.string(),
  })
  .refine((schema) => schema.repeat_password === schema.password, {
    message: "passwords don`t match",
    path: ["repeat_password"],
  });

export type regProps = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  ...emailValidation,
  ...passwordValidation,
});

const MAX_SIZE = 2000000;
const MIME_TYPES = ["image/jpg", "image/jpeg", "image/png", "image/webp"];

export const imageSchema = z.object({
  img: z
    .instanceof(FileList)
    .refine((file) => file[0]?.size <= MAX_SIZE, "file is too big")
    .refine((file) => MIME_TYPES.includes(file[0]?.type), 'incorrect file type')
});
