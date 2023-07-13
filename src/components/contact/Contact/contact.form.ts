import * as Yup from "yup";

export const formValues = () => ({
  user_name: "",
  user_email: "",
  user_message: "",
});

export const formValidations = () => {
  return Yup.object({
    user_name: Yup.string().min(1).max(50).required(),
    user_email: Yup.string().email().required(),
    user_message: Yup.string().min(5).max(1000).required(),
  });
};
