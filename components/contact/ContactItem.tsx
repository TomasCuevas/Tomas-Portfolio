import Link from "next/link";
import { IconType } from "react-icons";

//* interface *//
interface Props {
  icon: IconType;
  link?: string;
  media: string;
  text: string;
}

export const ContactItem: React.FC<Props> = ({
  icon: Icon,
  link,
  media,
  text,
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex rounded-md border border-purple/20 p-2">
        <Icon className="h-7 w-7 text-purple md:h-8 md:w-8" />
      </div>
      <div className="flex flex-col">
        <span className="font-sans text-sm text-light md:text-base">
          {media}
        </span>
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="font-sans text-white md:text-lg"
          >
            {text}
          </Link>
        ) : (
          <span className="font-sans text-white md:text-lg">{text}</span>
        )}
      </div>
    </div>
  );
};
