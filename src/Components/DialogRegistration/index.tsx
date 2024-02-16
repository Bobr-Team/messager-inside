import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { FC, useState } from "react";

interface DialogRegistrationProps {
    open: boolean;
    setOpen: (open: boolean) => void
}

const DialogRegistration: FC<DialogRegistrationProps> = ({open, setOpen}) => {

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
        },
      }}
    >
      <DialogTitle>Регистрация успешно завершена</DialogTitle>
      <DialogContent>
      <DialogContentText>
        Вы можете добавить свои фотографии или сразу войти в чат
      </DialogContentText>
        <Button 
            sx={{ mt: 1}} fullWidth variant="outlined" onClick={handleClose}>Добавить фото</Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Перейти в чат</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogRegistration;