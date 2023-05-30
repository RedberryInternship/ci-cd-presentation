import { ReactNode } from "react";
import { FormWrapper } from "../Components/Form/FormWrapper";
import { Input } from "../Components/Form/Input";
import { registerSchema as schema } from "../schema/schema";

export const Register: React.FC<{ children?: ReactNode }> = ({  }) => {
  return (
    <FormWrapper schema={schema}>
      <Input name="username" placeholder="username" />
      <Input name="email" placeholder="email" />
      <Input name="password" type="password" placeholder="password" />
      <Input
        name="repeat_password"
        type="password"
        placeholder="repeat password"
      />
    </FormWrapper>
  );
};
