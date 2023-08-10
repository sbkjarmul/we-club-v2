import { useForm } from "react-hook-form";
import BaseInput from "../components/BaseInput";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch("name"));

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <BaseInput
          register={register}
          name="email"
          label="Email"
          errors={errors}
        />

        <BaseInput
          register={register}
          name="password"
          label="Password"
          errors={errors}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
