import Button, { ButtonProps } from "@mui/material/Button";
import { ChangeEventHandler, PropsWithChildren } from "react";

type Props = PropsWithChildren<
  Omit<ButtonProps, "onChange"> & {
    accept?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
  }
>;

export default function FileButton({
  children,
  accept,
  onChange,
  ...props
}: Props) {
  return (
    <Button {...props}>
      {children}
      <input
        className="absolute top-0 left-0 w-full h-full opacity-0"
        type="file"
        role="button"
        accept={accept}
        onChange={onChange}
      />
    </Button>
  );
}
