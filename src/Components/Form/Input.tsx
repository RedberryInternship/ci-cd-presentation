import React from "react";
import { useFormContext } from "react-hook-form";

export const Input: React.FC<{
  name: string;
  type?: string;
  placeholder?: string;
}> = ({ name, type, placeholder }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <div className="input-group">
      <input
        type={type || "text"}
        {...register(name)}
        placeholder={placeholder}
      />
      <div className="error">
        {name in errors && <span>{`${errors?.[name]?.message}`}</span>}
      </div>
    </div>
  );
};
