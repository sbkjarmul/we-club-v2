import { useForm } from "react-hook-form";
import BaseInput from "@/components/shared/BaseInput";
import BaseButton from "@/components/shared/BaseButton";
import json from "@/assets/content.json";

const content = json.pages.register;

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
          label={content.fields.name}
          errors={errors}
        />

        <BaseInput
          register={register}
          name="email"
          label={content.fields.email}
          errors={errors}
        />

        <BaseInput
          register={register}
          name="password"
          label={content.fields.password}
          errors={errors}
        />

        <BaseInput
          register={register}
          name="passwordConfirmation"
          label={content.fields.password_confirmation}
          errors={errors}
        />

        <BaseButton type="submit" isOutlined>
          {content.actions.register}
        </BaseButton>
      </form>
    </div>
  );
};

export default Register;
