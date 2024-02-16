import React, { FC, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Link,
} from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { LoadingButton } from "@mui/lab";

interface AuthData {
  email: string;
  password: string;
}

const AuthComponent: FC = () => {
  const { handleSubmit, register } = useForm<AuthData>();

  const [isLoad, setLoad] = useState<boolean>(false);

  const onSubmit: SubmitHandler<AuthData> = (data) => {
    setLoad(true);
    try {
      console.log(data);
      //await axios.post("", data);
    } catch (error) {}
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Авторизация
        </Typography>
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
            label="Логин"
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
          <LoadingButton
            type="submit"
            loading={isLoad}
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
          >
            Войти
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item>
              <LinkRouter to="/registration">
                <Link variant="body2">Ещё нету аккаунта?</Link>
              </LinkRouter>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AuthComponent;
