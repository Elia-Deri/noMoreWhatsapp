import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Divider,
} from "@mui/material";
import { IoMdClose } from "react-icons/io";

export function DialogComponent({
  open,
  setOpen,
  title,
  acceptFun,
  acceptText,
  acceptIcon,
  children,
  ...rest
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  acceptText: string;
  acceptFun: React.MouseEventHandler<HTMLButtonElement>;
  acceptIcon: React.ReactNode;
  children: React.ReactNode | JSX.Element;
} & DialogProps) {
  return (
    <Dialog {...rest} open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{title}</DialogTitle>

      <Divider />

      <DialogContent>{children}</DialogContent>

      <DialogActions>
        <Button
          startIcon={<IoMdClose />}
          variant="text"
          onClick={() => setOpen(false)}
        >
          סגור
        </Button>

        <Button startIcon={acceptIcon} onClick={acceptFun}>
          {acceptText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
