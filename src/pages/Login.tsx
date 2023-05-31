import { FormWrapper } from "../Components/Form/FormWrapper";
import { Input } from "../Components/Form/Input";
import { loginSchema as schema } from "../schema/schema";

export const Login = () => {
  return (
    <FormWrapper schema={schema}>
      <Input name="email" placeholder="not an email" />
      <Input name="password" type="password" placeholder="not a password" />
    </FormWrapper>
  );
};
