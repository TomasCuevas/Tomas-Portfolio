import { useEffect, useState, FormEvent } from "react";

//* INTERFACE *//
interface Props {
  inputChange: any;
  inputName: string;
  inputValue: string;
  label: string;
  max?: number;
}

export const FormTextarea: React.FC<Props> = ({
  inputChange,
  inputName,
  inputValue,
  label,
  max = 100,
}) => {
  const [focus, setFocus] = useState(false);
  const [height, setHeight] = useState(200);

  const inputFocus = () => {
    if (inputValue.length < 150) setHeight(200);
    setFocus(true);
  };

  const inputBlur = () => {
    if (inputValue.length < 150) setHeight(200);
    if (inputValue.length < 1) {
      setFocus(false);
    }
  };

  const onInput = (input: FormEvent<HTMLTextAreaElement>) => {
    const heightInput = (input.target as any).scrollHeight;
    if (heightInput === height || heightInput <= 180) return;
    setHeight(heightInput + 20);
  };

  useEffect(() => {
    if (inputValue.length > 0) {
      setFocus(true);
    }
  }, [inputValue]);

  return (
    <div
      className="relative flex flex-col rounded-md bg-white/80  px-5 transition-all duration-300"
      style={{ height: focus ? height : 60 }}
    >
      <label
        htmlFor={inputName}
        className={
          focus
            ? "absolute top-[5px] text-xs font-light text-purple transition-all"
            : "absolute top-[50%] translate-y-[-50%] font-medium text-purple duration-300"
        }
      >
        {label}
      </label>
      <textarea
        onFocus={inputFocus}
        onBlur={inputBlur}
        maxLength={max}
        name={inputName}
        autoComplete="off"
        id={inputName}
        value={inputValue}
        onChange={(event) => {
          inputChange(event);
          onInput(event);
        }}
        className="mt-[20px] w-full resize-none overflow-hidden border-none bg-transparent text-lg font-medium text-black outline-none"
        style={{ height: focus ? height : 200 }}
      />
    </div>
  );
};
