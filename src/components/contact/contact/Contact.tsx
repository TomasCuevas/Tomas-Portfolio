import { FormEvent } from "react";
import emailjs from "@emailjs/browser";

//* icons *//
import { FaLinkedin, FaGithubSquare, FaAt } from "react-icons/fa";

//* components *//
import { ContactItem } from "@/components/contact";
import {
  FormButtonPrimary,
  FormInputPrimary,
  FormTextarea,
} from "@/components/form";
import { SectionTitle } from "@/components/ui";

//* hooks *//
import { useForm } from "@/hooks";

//* helpers *//
import { emailValidation, messageValidation, nameValidation } from "@/helpers";

export const Contact: React.FC = () => {
  const {
    user_name,
    user_email,
    user_message,
    isSending,
    onInputChange,
    setIsSending,
    reset,
  } = useForm({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    const status = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      event.currentTarget,
      process.env.NEXT_PUBLIC_PUBLIC_ID!
    );

    if (status.status === 200) {
      reset();
    }

    setIsSending(false);
  };

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
          <form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
            <FormInputPrimary
              inputName="user_name"
              label="Nombre"
              inputValue={user_name}
              inputChange={onInputChange}
            />
            <FormInputPrimary
              inputName="user_email"
              label="Email"
              inputValue={user_email}
              inputChange={onInputChange}
            />
            <FormTextarea
              inputChange={onInputChange}
              inputName="user_message"
              inputValue={user_message}
              label="Mensaje"
              max={1000}
            />
            <FormButtonPrimary
              label="Enviar"
              type="submit"
              isDisabled={
                isSending ||
                !emailValidation(user_email) ||
                !nameValidation(user_name) ||
                !messageValidation(user_message)
              }
            />
          </form>
        </div>
      </div>
    </section>
  );
};
