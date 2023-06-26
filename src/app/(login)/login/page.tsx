"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Icons
import ProfileIcon from "@icons/ProfileIcon.svg";
import LockIcon from "@icons/LockIcon.svg";

// Toast
import { toast } from "react-toastify";

// Cookies
import Cookies from "universal-cookie";

// Styles
import styles from "./index.module.scss";

const Login = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const defaultLoginData = {
    email: "",
    senha: "",
  };
  const [login, setLogin] = useState(defaultLoginData);
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitLoading(true);
    cookies.set("grt8_session_token", "teste", { maxAge: 60 * 60 * 3 });
    router.push("/");
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
          <label>Usuário</label>
          <div>
            <input
              type="text"
              name="email"
              required
              tabIndex={1}
              placeholder="Insira o e-mail"
              autoComplete="off"
              onChange={handleLogin}
            />
            <ProfileIcon />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Senha</label>
          <div>
            <input
              type="password"
              name="senha"
              required
              tabIndex={2}
              autoComplete="off"
              placeholder="Insira sua senha"
              onChange={handleLogin}
            />
            <LockIcon />
          </div>
        </div>
        <button
          tabIndex={3}
          type="submit"
          disabled={!(login.email && login.senha) || submitLoading}
          className={!(login.email && login.senha) ? styles.disabled : ""}
        >
          Login
        </button>
      </form>
      <div className={styles.image}>
        <Image
          width={600}
          height={600}
          quality={100}
          unoptimized={true}
          src={"/imgs/login-bg.png"}
          alt="Ilustração de pessoa utilizando o sistema"
        />
      </div>
    </main>
  );
};

export default Login;
