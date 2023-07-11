export const nameValidation = (value: string): boolean => {
  const regex = /^[a-zA-ZÁ-ÿ\u00f1\u00d1\s]{1,30}$/;
  return regex.test(value);
};

export const emailValidation = (value: string): boolean => {
  const regex =
    /^[a-zA-Z0-9À-ÿ\u00f1\u00d1\-\_]+@[a-zA-Z0-9Á-ÿ\u00f1\u00d1\-\_]+\.[a-zA-Z0-9Ä-ÿ\u00f1\u00d1\-\_]+$/;
  return regex.test(value);
};

export const messageValidation = (value: string): boolean => {
  const regex = /^.{0,1000}$/;
  return regex.test(value);
};
