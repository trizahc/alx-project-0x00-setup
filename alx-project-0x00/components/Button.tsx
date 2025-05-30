// components/Button.tsx
import { ButtonProps } from "@/interfaces";

export default function Button({ title, styles }: ButtonProps) {
  return (
    <button className={`px-4 py-2 text-white bg-blue-500 ${styles}`}>
      {title}
    </button>
  );
}
