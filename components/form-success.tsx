import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <p
      className="mt-4 flex items-start space-x-2 text-green-500 bg-green-100 rounded-md p-3
    "
    >
      <CheckCircledIcon className="mt-1" />
      <span>{message}</span>
    </p>
  );
};
