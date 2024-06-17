import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Textarea } from "../../components/ui/textarea";
import TextAreaWrapper from "@/lib-wrapper/TextAreaWrapper";

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

export default function DemoForm() {
  const form = useForm<FieldValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = form.handleSubmit((data) => {
    const dataget = JSON.stringify(data);
    alert(dataget);
    console.log(dataget);
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-2/3 space-y-6">
        <TextAreaWrapper
          control={form.control}
          name={"bio"}
          label={"Bio"}
          placeholder={"Tell us a little bit about yourself"}
          description={
            "You can <span>@mention</span> other users and organizations."
          }
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
