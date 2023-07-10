"use client";

import Image from "next/image";
import styles from "./index.module.scss";
import { Steps } from "@/components/Steps";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Cadastro = () => {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();
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
        <div className={styles.info}>
          <form>
            {activeStep == 0 && (
              <>
                <div className={styles.formGroup}>
                  <label>Nome completo</label>
                  <input type="text" />
                </div>
                <div className={styles.formGroup}>
                  <label>Apelido</label>
                  <input type="text" />
                </div>
                <div className={styles.formGroup}>
                  <label>Gênero</label>
                  <select>
                    <option>Masculino</option>
                    <option>Feminino</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Data de nascimento</label>
                  <input type="date" />
                </div>
              </>
            )}
            {activeStep == 1 && (
              <>
                <div className={styles.formGroup}>
                  <label>E-mail</label>
                  <input type="text" />
                </div>
                <div className={styles.formGroup}>
                  <label>Senha</label>
                  <input type="password" />
                </div>
                <div className={styles.formGroup}>
                  <label>Confirme a senha</label>
                  <input type="password" />
                </div>
              </>
            )}
            {activeStep == 2 && (
              <>
                <div className={styles.formGroup}>
                  <label>Telefone para contato</label>
                  <input type="text" />
                </div>
                <div className={styles.formGroup}>
                  <label>Endereço</label>
                  <input type="password" />
                </div>
              </>
            )}
          </form>
          <div className={styles.buttons}>
            <button
              disabled={activeStep == 0}
              onClick={() => activeStep > 0 && setActiveStep(activeStep - 1)}
            >
              Anterior
            </button>
            <button
              onClick={() => {
                if (activeStep < 3) {
                  setActiveStep(activeStep + 1);
                } else {
                  alert("Cadastro concluído");
                  router.push("/login");
                }
              }}
            >
              {activeStep == 3 ? "Concluir" : "Próximo"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cadastro;
