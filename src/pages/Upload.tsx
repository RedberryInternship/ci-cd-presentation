import { FormWrapper } from "../Components/Form/FormWrapper";
import { Input } from "../Components/Form/Input";
import { imageSchema as schema } from "../schema/schema";

export const Upload = () => {
  return (
    <FormWrapper schema={schema}>
      <Input name="img" type="file" />
    </FormWrapper>
  );
};
