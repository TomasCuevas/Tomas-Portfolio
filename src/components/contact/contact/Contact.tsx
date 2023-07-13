import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

//* ICONS *//
import { FaLinkedin, FaGithubSquare, FaAt } from "react-icons/fa";

//* COMPONENTS *//
import { ContactItem } from "@/components/contact";
import {
  FormButtonPrimary,
  FormInputPrimary,
  FormTextarea,
} from "@/components/form";
import { SectionTitle } from "@/components/ui";

//* FORM VALUES AND FORM VALIDATIONS *//
import { formValidations, formValues } from "./contact.form";

export const Contact: React.FC = () => {
  const formik = useFormik({
    initialValues: formValues(),
    validationSchema: formValidations(),
    validateOnMount: true,
    onSubmit: async (formValues) => {
      try {
        const status = await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          formValues,
          process.env.NEXT_PUBLIC_PUBLIC_ID!
        );

        if (status.status === 200) formik.resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <section
      id="contact"
      className="flex min-h-screen w-screen items-center justify-center bg-[url('/background/contact-background-mobile.svg')] bg-cover bg-no-repeat lg:mt-20 lg:bg-[url('/background/contact-background.svg')]"
    >
      <div className="flex w-full max-w-[1000px] flex-col p-4 xs:px-10 md:px-16 lg:px-8 xl:px-0">
        <SectionTitle title="Contacto" />
        <div className="mt-5 flex flex-col gap-10 lg:flex-row">
          <div className="flex h-full w-full flex-col gap-3 rounded-md bg-darkLight p-4 py-6 sm:gap-5 lg:gap-10">
            <ContactItem
              icon={FaLinkedin}
              link="https://www.linkedin.com/in/tom%C3%A1s-cuevas-dev/"
              media="LinkedIn"
              text="linkedin.com/in/tomás-cuevas-dev/"
            />
            <ContactItem
              icon={FaGithubSquare}
              link="https://github.com/TomasCuevas"
              media="GitHub"
              text="github.com/TomasCuevas"
            />
            <ContactItem
              icon={FaAt}
              media="Email"
              text="tomas.contact.dev@gmail.com"
            />
          </div>
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={formik.handleSubmit}
          >
            <FormInputPrimary
              inputName="user_name"
              label="Nombre"
              inputValue={formik.values.user_name}
              inputChange={formik.handleChange}
            />
            <FormInputPrimary
              inputName="user_email"
              label="Email"
              inputValue={formik.values.user_email}
              inputChange={formik.handleChange}
            />
            <FormTextarea
              inputName="user_message"
              label="Mensaje"
              max={1000}
              inputValue={formik.values.user_message}
              inputChange={formik.handleChange}
            />
            <FormButtonPrimary
              label="Enviar"
              type="submit"
              isDisabled={
                formik.isSubmitting || Object.keys(formik.errors).length > 0
              }
            />
          </form>
        </div>
      </div>
    </section>
  );
};
