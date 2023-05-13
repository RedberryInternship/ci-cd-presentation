import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema } from "zod";

export const FormWrapper: React.FC<{
  children: ReactNode;
  schema: Schema
}> = ({ children, schema }) => {
  const form = useForm({ mode: "onBlur", resolver: zodResolver(schema) });
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {children}
        <button>submit</button>
      </form>
    </FormProvider>
  );
};
