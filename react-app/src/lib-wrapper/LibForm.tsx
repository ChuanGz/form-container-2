import React, { ReactElement } from "react";
import { FieldValues, Noop, useForm } from "react-hook-form";

interface FormProps {
  defaultValues: Partial<FieldValues>;
  children: ReactElement;
  onSubmit: Noop;
}

export function LibForm({ defaultValues, children, onSubmit }: FormProps) {
  const { handleSubmit, register } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
}
