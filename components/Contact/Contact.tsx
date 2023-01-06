import { FormEvent, useState } from "react";
import { motion, Variants } from "framer-motion";

//* components *//
import { SectionTitle } from "../ui";
import { FormButtonPrimary, FormInputPrimary, FormTextarea } from "../form";

//* hooks *//
import { useForm } from "../../hooks";
import {
  emailValidation,
  messageValidation,
  nameValidation,
} from "../../helpers";

//* animation variants *//
const sectionAnimation: Variants = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { duration: 2 } },
};

export const Contact: React.FC = () => {
  const { email, message, name, isSending, onInputChange, setIsSending } =
    useForm({
      name: "",
      email: "",
      message: "",
    });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(email, message, name);
  };

  return (
    <motion.section
      id="contact"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.4 }}
      variants={sectionAnimation}
      className="flex min-h-screen w-screen items-center justify-center bg-[url('/background/contact-background-mobile.svg')] bg-cover bg-no-repeat lg:mt-20 lg:bg-[url('/background/contact-background.svg')]"
    >
      <div className="flex w-full max-w-[1000px] flex-col p-4 xs:px-10 md:px-16 lg:px-8 xl:px-0">
        <SectionTitle title="Contacto" />
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <FormInputPrimary
            inputName="name"
            label="Nombre"
            inputValue={name}
            inputChange={onInputChange}
          />
          <FormInputPrimary
            inputName="email"
            label="Email"
            inputValue={email}
            inputChange={onInputChange}
          />
          <FormTextarea
            inputChange={onInputChange}
            inputName="message"
            inputValue={message}
            label="Mensaje"
            max={1000}
          />
          <FormButtonPrimary
            label="Enviar"
            type="submit"
            isDisabled={
              !emailValidation(email) ||
              !nameValidation(name) ||
              !messageValidation(message)
            }
          />
        </form>
      </div>
    </motion.section>
  );
};
