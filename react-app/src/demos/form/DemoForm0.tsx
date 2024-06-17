import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const myObject = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

export default function DemoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof myObject>>({
    resolver: zodResolver(myObject),
  });

  const onSubmit = handleSubmit((data) => {
    const dataget = JSON.stringify(data);
    alert(dataget);
    console.log(dataget);
  });

  return (
    <div className="App">
      <h1>React Hook Form Demo</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name</label>
          <input {...register("firstName")} placeholder="Kotaro" />
          {errors?.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <input {...register("lastName")} placeholder="Sugawara" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
