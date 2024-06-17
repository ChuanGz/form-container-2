import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

export interface LibFormFieldProps<
  TData extends FieldValues = FieldValues,
  TPathData extends FieldPath<TData> = FieldPath<TData>
> {
  control: Control<TData>;
  name: TPathData;
  label: string;
  placeholder: string;
  description: string;
}

export const TextAreaWrapper = ({
  name,
  control,
  label,
  placeholder,
  description,
}: LibFormFieldProps) => {
  const { field } = useController({ name, control });

  return (
    <FormItem>
      <FormLabel>{label} </FormLabel>
      <FormControl>
        <Textarea placeholder={placeholder} {...field} />
        <FormDescription>{description} </FormDescription>
      </FormControl>

      <FormMessage />
    </FormItem>
  );
};

export default TextAreaWrapper;
