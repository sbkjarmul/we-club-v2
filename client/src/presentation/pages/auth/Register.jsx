import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// Presentation Layer
import FormInput from "@/presentation/components/shared/FormInput";
import BaseButton from "@/presentation/components/shared/BaseButton";
import content from "@/presentation/assets/content.json";
// Application Layer
import { registerUser } from "@/application";

const authContent = content.pages.auth;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-96">
        <FormInput
          register={register}
          name="name"
          label={authContent.fields.name}
          error={errors.password}
          value="Test2"
        />

        <FormInput
          register={register}
          name="email"
          label={authContent.fields.email}
          error={errors.password}
          type="email"
          value="test22@test.pl"
        />

        <FormInput
          register={register}
          name="password"
          label={authContent.fields.password}
          error={errors.password}
          type="password"
          value="Test123!"
        />

        <FormInput
          register={register}
          name="passwordConfirmation"
          label={authContent.fields.password_confirmation}
          errors={errors.passwordConfirmation}
          type="password"
          value="Test123!"
        />

        <BaseButton type="submit">{authContent.actions.register}</BaseButton>
      </form>
    </div>
  );
};

export default Register;
