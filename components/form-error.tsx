import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <p
      className="mt-4 flex items-start space-x-2 text-red-500 bg-red-100 rounded-md p-3
    "
    >
      <ExclamationTriangleIcon className="mt-1" />
      <span>{message}</span>
    </p>
  );
};
