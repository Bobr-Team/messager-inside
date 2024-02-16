import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { FC, useState } from "react";

interface DialogConfirmEmailProps {
    open: boolean;
    setOpen: (open: boolean) => void
    setCorrectlyToken: (isCorrectlyToken: boolean) => void
}

const DialogConfirmEmail: FC<DialogConfirmEmailProps> = ({open, setOpen, setCorrectlyToken}) => {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
          setCorrectlyToken(true);
        },
      }}
    >
      <DialogTitle>Введите одноразовый пароль</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="token"
          label="Одноразовый пароль"
          type="token"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogConfirmEmail;