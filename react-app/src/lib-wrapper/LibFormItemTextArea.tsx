import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

export const LibFormItemTextArea = <
  TData extends FieldValues = FieldValues,
  TPathData extends FieldPath<TData> = FieldPath<TData>
>({
  field,
  label,
  description,
}: {
  field: ControllerRenderProps<TData, TPathData>;
  label?: string;
  description?: string;
}) => (
  <FormItem>
    <FormLabel>{label}</FormLabel>
    <FormControl>
      <Textarea {...field} />
    </FormControl>
    <FormDescription>{description}</FormDescription>
    <FormMessage />
  </FormItem>
);
