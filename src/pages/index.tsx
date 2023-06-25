import { Alert, Box, Button, Checkbox, FormControlLabel, Grid, Snackbar, TextField } from '@mui/material'
import styles from '../styles/Home.module.css'
import {useState} from "react"

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useRouter } from 'next/router';

interface ILoginInfo {
  email: string,
  password: string
}
export default function Login() {

  const router = useRouter();

  const allowedLogins: ILoginInfo[] = [
    {email: "dantjv@outlook.com", password: "123456"}
  ]

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e:any) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    allowedLogins.map(user => {
      if(user.email == email && user.password == password){
        router.push("/home")
        return;
      }
    })


    setOpenSnackbar(true);

  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={4} display="flex" direction="column" alignItems="center" justifyContent="center" p={2}>
          <img src="/logo.jpg" alt="logo" className={styles.logo}/>
          <Box>
          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Lembrar de mim"
          checked={rememberMe}
          onChange={handleRememberMeChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={styles.submit}
          onClick={handleSubmit}
        >
          Entrar
        </Button>
        <Grid container mt={1} spacing={2}>
          <Grid item xs>
            <Button
              fullWidth
              variant="contained"
              color="error"
              onClick={() => {
                console.log('Login com Google!');
              }}
            >
              <GoogleIcon/>
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                console.log('Login com Facebook!');
              }}
            >
              <FacebookIcon/>
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="end" mt={2}>
          <Grid item>
            <Button color="primary" onClick={() => console.log('Cadastro de conta!')}>
              Não tem uma conta? Cadastre-se
            </Button>
          </Grid>
        </Grid>
          </Box>
        </Grid>
        <Grid item xs={8} className={styles.backgroundCover}></Grid>
      </Grid>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
        <Alert onClose={handleCloseSnackbar} severity="error">
          Falha de login! Confira suas credenciais.
        </Alert>
      </Snackbar>
    </>
  )
}
