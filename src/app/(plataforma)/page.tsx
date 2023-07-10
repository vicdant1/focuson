"use client";
import Image from "next/image";
import styles from "./page.module.scss";

import { Box, Grid, Typography } from "@mui/material";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Home = () => {
  return (
    <Box mt={2} px={4}>
      <div className={styles.root}>
        <Typography variant="h1" gutterBottom className="title">
          Perfil
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Image
              src="/imgs/profile.jpg"
              alt=""
              height={200}
              width={200}
              className="imgPefil"
            />
          </Grid>
          <Grid item xs={12} sm={6} className="testt">
            <ul>
              <li>
                <span>Nome:</span>
                <h2>Pedro Lucas Gois Costa</h2>
              </li>
              <li>
                <span>Email</span>
                <h2>p.gois@academico.ifrn.edu.br</h2>
              </li>
              <li>
                <span>IRA</span>
                <h2>7,2</h2>
              </li>
            </ul>
            <ul>
              <li>
                <span>Matricula:</span>
                <h2>219012835892</h2>
              </li>
              <li>
                <span>Professor responsavel</span>
                <h2>Jorge cleber araujo</h2>
              </li>
              <li>
                <span>Media</span>
                <h2>6</h2>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Porcentagem de conclusão: 17% </Typography>
            <br />
            <BorderLinearProgress variant="determinate" value={17} />
          </Grid>
        </Grid>
        <Grid container spacing={3} className="cards">
          <Grid item xs={12} sm={4}>
            <a href="/tarefas">
              <div className="card">
                <TaskAltIcon />
                <h3>Tarefas</h3>
              </div>
            </a>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Home;
