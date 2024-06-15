import { FormField } from "@/components/ui/form";

import { Control, FieldPath, FieldValues, PathValue } from "react-hook-form";
import { LibFormItemTextArea } from "./LibFormItemTextArea";

export const LibFormField = <
  TData extends FieldValues = FieldValues,
  TPathData extends FieldPath<TData> = FieldPath<TData>
>({
  control,
  defaultValue,
  disabled,
  name,
}: {
  control: Control<TData>;
  defaultValue: PathValue<TData, TPathData>;
  disabled: boolean;
  name: TPathData;
}) => {
  return (
    <FormField
      control={control}
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      render={LibFormItemTextArea}
    />
  );
};
