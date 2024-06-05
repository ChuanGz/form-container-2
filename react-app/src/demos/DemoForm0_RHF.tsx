import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: !values.firstName ? {} : values,
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export default function DemoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: resolver,
  });
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

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