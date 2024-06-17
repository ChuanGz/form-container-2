import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

export interface LibFormItemTextAreaProps<
  TData extends FieldValues = FieldValues,
  TPathData extends FieldPath<TData> = FieldPath<TData>
> {
  field: ControllerRenderProps<TData, TPathData>;
  label?: string;
  description?: string;
}

export const LibFormItemTextArea = ({
  field: { onChange, onBlur, value, name, ref },
  label,
  description,
}: LibFormItemTextAreaProps) => (
  <FormItem>
    <FormLabel>{label}</FormLabel>
    <FormControl>
      <Textarea
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        ref={ref}
      />
    </FormControl>
    <FormDescription>{description}</FormDescription>
    <FormMessage />
  </FormItem>
);
