import { useForm } from "react-hook-form";
import BaseInput from "@/presentation/components/shared/BaseInput";
import BaseButton from "@/presentation/components/shared/BaseButton";
import content from "@/presentation/assets/content.json";

const authContent = content.pages.auth;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-96">
        <BaseInput
          register={register}
          name="name"
          label={authContent.fields.name}
          error={errors.password}
        />

        <BaseInput
          register={register}
          name="email"
          label={authContent.fields.email}
          error={errors.password}
        />

        <BaseInput
          register={register}
          name="password"
          label={authContent.fields.password}
          error={errors.password}
        />

        <BaseInput
          register={register}
          name="passwordConfirmation"
          label={authContent.fields.password_confirmation}
          errors={errors.passwordConfirmation}
        />

        <BaseButton type="submit" isOutlined>
          {authContent.actions.register}
        </BaseButton>
      </form>
    </div>
  );
};

export default Register;
