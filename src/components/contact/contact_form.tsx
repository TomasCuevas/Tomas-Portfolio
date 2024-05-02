import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

//* NEXTUI *//
import { Input, Textarea, Button } from "@nextui-org/react";

//* COMPONENTS *//
import { Alert } from "@/components/alert/alert";

const ContactForm = () => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const [formStatus, setFormStatus] = useState({ success: false, error: false });
  const [isSubmiting, setIsSubmiting] = useState(false);

  //! HANDLE FORM
  async function handleForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmiting(true);

    try {
      const status = await emailjs.send(
        import.meta.env.PUBLIC_SERVICE_ID,
        import.meta.env.PUBLIC_TEMPLATE_ID,
        form,
        import.meta.env.PUBLIC_PUBLIC_KEY,
      );

      if (status.status === 200) {
        setForm({ user_email: "", user_message: "", user_name: "" });
        setFormStatus({ success: true, error: false });
      }
    } catch (error) {
      console.error(error);
      setFormStatus({ success: false, error: true });
    } finally {
      setIsSubmiting(false);
    }
  }

  useEffect(() => {
    if (formStatus.success === false && formStatus.error === false) return;

    setTimeout(() => {
      setFormStatus({ success: false, error: false });
    }, 10000);
  }, [formStatus]);

  return (
    <form className="contact__form flex w-full flex-col gap-4" onSubmit={handleForm}>
      <Input
        color="secondary"
        variant="faded"
        label="Nombre"
        name="name"
        radius="none"
        value={form.user_name}
        onChange={({ target }) => setForm((prev) => ({ ...prev, user_name: target.value }))}
      />
      <Input
        color="secondary"
        variant="faded"
        label="Email"
        name="email"
        type="email"
        radius="none"
        value={form.user_email}
        onChange={({ target }) => setForm((prev) => ({ ...prev, user_email: target.value }))}
      />
      <Textarea
        color="secondary"
        variant="faded"
        label="Mensaje"
        name="message"
        radius="none"
        minRows={2}
        maxRows={15}
        value={form.user_message}
        onChange={({ target }) => setForm((prev) => ({ ...prev, user_message: target.value }))}
      />

      <Button
        disabled={!form.user_email || !form.user_message || !form.user_name}
        radius="none"
        variant="flat"
        color="secondary"
        className="drop-shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
        type="submit"
        isLoading={isSubmiting}
      >
        {isSubmiting ? "Enviando" : "Enviar"}
      </Button>

      {formStatus.success && <Alert.Success text="¡Tu mensaje ha sido enviado con éxito!" />}
      {formStatus.error && <Alert.Error text="Lo sentimos, ocurrió un error al enviar tu mensaje." />}
    </form>
  );
};

export default ContactForm;
