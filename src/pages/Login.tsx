import { FormWrapper } from "../Components/Form/FormWrapper";
import { Input } from "../Components/Form/Input";
import { loginSchema as schema } from "../schema/schema";

export const Login = () => {
  return (
    <FormWrapper schema={schema}>
      <Input name="email" placeholder="email" />
      <Input name="password" type="password" placeholder="password" />
    </FormWrapper>
  );
};
