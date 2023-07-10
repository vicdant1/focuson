"use client";

import Image from "next/image";
import styles from "./index.module.scss";
import { Steps } from "@/components/Steps";
import { useState } from "react";

const Cadastro = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <main className={styles.cadastro}>
      <div className={styles.container}>
        <header>
          <Image
            width={140}
            height={80}
            quality={100}
            unoptimized={true}
            src={"/imgs/logo.jpg"}
            alt="Logotipo da grt8"
            className={styles.logo}
          />
          <Steps activeStep={activeStep} />
        </header>
        <div className={styles.details}>
          <h1>
            Cadastre-se e tenha acesso a maior plataforma de ensino básico
            potiguar
          </h1>

          <a href="/login">Já tem uma conta? Faça login</a>
        </div>
        <div className={styles.info}></div>
      </div>
    </main>
  );
};

export default Cadastro;
