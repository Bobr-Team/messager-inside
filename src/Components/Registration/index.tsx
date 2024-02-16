import React, { FC, useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Link,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import DialogConfirmEmail from "../DialogConfirmEmail";
import DialogRegistration from "../DialogRegistration";

interface RegistrationData {
  email: string;
  password: string;
  nickname: string;
  age: number;
  gender: number;
  country: number;
  town: number;
  avatar: File;
  about: string;
}

const RegistrationComponent: FC = () => {
  const { handleSubmit, register } = useForm<RegistrationData>();

  const [image, setImage] = useState<string>(
    "https://via.placeholder.com/180x150/200"
  );

  const [isLoad, setLoad] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);

  const [openToken, setOpenToken] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // axios.get("");
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    if (event.dataTransfer.files) {
      setImage(URL.createObjectURL(event.dataTransfer.files[0]));
    }
  };

  const onSubmit: SubmitHandler<RegistrationData> = (data) => {
    setLoad(true);
    setOpen(true);
    try {
      console.log(data);
      //await axios.post("", data);
    } catch (error) {}
    // setLoad(false);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ pt: 3, textAlign: "center" }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>

        <Button
          variant="outlined"
          component="label"
          sx={{
            marginTop: 2,
            width: 120,
            height: 120,
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
          }}
          onDrop={handleDrop}
        >
          <input
            {...register("avatar", { required: false })}
            type="file"
            hidden
            name="image"
            accept=".png, .jpg, .jpeg, .svg"
            onChange={handleFileChange}
          />
        </Button>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            {...register("email", { required: true })}
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            {...register("password", { required: true })}
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="repeat_password"
            label="Подверждение пароля"
            type="password"
            id="repeat_password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            {...register("nickname", { required: true })}
            id="nickname"
            label="Ник"
            name="nickname"
            autoComplete="nickname"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            {...register("age", { required: true })}
            id="age"
            label="Возраст"
            name="age"
            autoComplete="age"
            type="number"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            select
            fullWidth
            {...register("gender", { required: true })}
            id="gender"
            label="Пол"
            name="gender"
            autoFocus
            sx={{
              textAlign: "left",
            }}
          >
            <MenuItem value={10}>Мужчина</MenuItem>
            <MenuItem value={20}>Женщина</MenuItem>
          </TextField>
          <TextField
            margin="normal"
            required
            select
            fullWidth
            {...register("country", { required: true })}
            id="country"
            label="Страна"
            name="country"
            autoFocus
            sx={{
              textAlign: "left",
            }}
          >
            <MenuItem value={1}>Россия</MenuItem>
            <MenuItem value={2}>США</MenuItem>
          </TextField>
          <TextField
            margin="normal"
            required
            select
            fullWidth
            {...register("town", { required: true })}
            id="town"
            label="Город"
            name="town"
            autoFocus
            sx={{
              textAlign: "left",
            }}
          >
            <MenuItem value={1}>Россия</MenuItem>
            <MenuItem value={2}>США</MenuItem>
          </TextField>
          <TextField
            margin="normal"
            fullWidth
            {...register("about", { required: false })}
            id="about"
            label="Расскажите немного о себе"
            name="about"
            multiline
            rows={3}
          />
          <LoadingButton
            loading={isLoad}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
          >
            Зарегистрироваться
          </LoadingButton>
          <DialogConfirmEmail setCorrectlyToken={setOpenToken} open={open} setOpen={setOpen} />
          <DialogRegistration open={openToken} setOpen={setOpenToken} />
        </Box>
      </Box>
    </Container>
  );
};

export default RegistrationComponent;
