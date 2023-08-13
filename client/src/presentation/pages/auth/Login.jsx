import { useForm } from "react-hook-form";
// Presentation Layer
import BaseInput from "@/presentation/components/shared/BaseInput";
import BaseButton from "@/presentation/components/shared/BaseButton";
import content from "@/presentation/assets/content.json";
// Application Layer

const authContent = content.pages.auth;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-96">
        <BaseInput
          register={register}
          name="email"
          label={authContent.fields.email}
          error={errors.email}
        />

        <BaseInput
          register={register}
          name="password"
          label={authContent.fields.password}
          error={errors.password}
        />

        <BaseButton type="submit">{authContent.actions.login}</BaseButton>
      </form>
    </div>
  );
};

export default Login;
