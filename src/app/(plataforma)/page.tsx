"use client";
import styles from "./page.module.scss";

import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box mt={2} px={4}>
      <div className={styles.root}>
        <Typography variant="h4" gutterBottom>
          Sobre nós...
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Educação
            </Typography>
            <Typography variant="body1" gutterBottom>
              Acreditamos no poder da educação para transformar vidas. Nossa
              missão é fornecer educação acessível e de alta qualidade para
              alunos de todas as idades. Por meio de nossos programas inovadores
              e professores dedicados, nos esforçamos para criar um ambiente que
              estimule a curiosidade, a criatividade e um amor vitalício pelo
              aprendizado.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Foco com Música
            </Typography>
            <Typography variant="body1" gutterBottom>
              A música tem uma capacidade única de aumentar o foco e a
              produtividade. Integramos a música em nossa abordagem educacional
              para criar uma experiência de aprendizado estimulante e
              envolvente. Nossas listas de reprodução cuidadosamente
              selecionadas e atividades baseadas em música ajudam os alunos a se
              manterem motivados, melhorar a concentração e liberar todo o seu
              potencial.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            colocar alguma imagem aqui
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Home;
