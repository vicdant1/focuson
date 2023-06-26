"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Icons
import ProfileIcon from "@icons/ProfileIcon.svg";
import LockIcon from "@icons/LockIcon.svg";

// Styles
import styles from "./index.module.scss";

// Mocks
import allowedLogins from "@mocks/allowedLogins.json";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const defaultLoginData = {
    email: "",
    senha: "",
  };
  const [login, setLogin] = useState(defaultLoginData);

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginAutenticado = allowedLogins.find(
      (aLogin) => aLogin.email === login.email && aLogin.senha === login.senha
    );
    if (loginAutenticado) {
      window.localStorage.setItem("focuson_login_user", JSON.stringify(login));
      toast.success("Login realizado com sucesso!");
      router.push("/");
      return;
    }
    toast.error("Usuário ou senha incorretos!");
  };

  return (
    <main className={styles.login}>
      <form onSubmit={handleSubmit} method="post" autoComplete="off">
        <Image
          width={250}
          height={150}
          quality={100}
          unoptimized={true}
          src={"/imgs/logo.jpg"}
          alt="Logotipo da grt8"
          className={styles.logo}
        />
        <div className={styles.formGroup}>
          <label htmlFor="email">Usuário</label>
          <div>
            <input
              id="email"
              type="text"
              name="email"
              required
              tabIndex={1}
              placeholder="Insira o e-mail"
              autoComplete="usuario"
              onChange={handleLogin}
            />
            <ProfileIcon />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="current-password">Senha</label>
          <div>
            <input
              id="current-password"
              type="password"
              name="senha"
              required
              tabIndex={2}
              autoComplete="current-password"
              placeholder="Insira sua senha"
              onChange={handleLogin}
            />
            <LockIcon />
          </div>
        </div>
        <button
          tabIndex={3}
          type="submit"
          disabled={!(login.email && login.senha)}
          className={!(login.email && login.senha) ? styles.disabled : ""}
        >
          Fazer login
        </button>
      </form>
      <div className={styles.image}>
        <Image
          layout="fill"
          quality={100}
          unoptimized={true}
          src={"/imgs/login-bg.jpg"}
          alt="Ilustração de pessoa utilizando o sistema"
        />
      </div>
    </main>
  );
};

export default Login;
