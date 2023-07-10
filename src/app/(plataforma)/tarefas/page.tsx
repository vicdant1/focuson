"use client";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateOrEditTaskModal from "@/components/CreateOrEditTaskModal/CreateOrEditTaskModal";
import { useState } from "react";
import TaskCard from "@/components/TaskCard/TaskCard";
import { ITaskCardProps } from "@/interfaces/ITaskCardProps";

const Tarefas = () => {
  const [open, setOpen] = useState(false);
  const tasks: ITaskCardProps[] = [
    {
      difficulty: "Fácil",
      quality: 2,
      subject: "Adição",
      title: "Soma de Números Pequenos",
    },
    {
      difficulty: "Médio",
      quality: 4,
      subject: "Subtração",
      title: "Problemas de Subtração",
    },
    {
      difficulty: "Difícil",
      quality: 5,
      subject: "Multiplicação",
      title: "Multiplicação de Números de Dois Dígitos",
    },
    {
      difficulty: "Fácil",
      quality: 3,
      subject: "Divisão",
      title: "Divisão com Resto",
    },
    {
      difficulty: "Médio",
      quality: 4,
      subject: "Frações",
      title: "Comparação de Frações",
    },
    {
      difficulty: "Difícil",
      quality: 5,
      subject: "Decimais",
      title: "Operações com Números Decimais",
    },
    {
      difficulty: "Fácil",
      quality: 2,
      subject: "Valor Posicional",
      title: "Identificação do Valor Posicional",
    },
    {
      difficulty: "Médio",
      quality: 3,
      subject: "Geometria",
      title: "Área e Perímetro de Figuras Geométricas",
    },
    {
      difficulty: "Difícil",
      quality: 4,
      subject: "Medidas",
      title: "Conversão de Unidades de Medida",
    },
    {
      difficulty: "Fácil",
      quality: 5,
      subject: "Tempo",
      title: "Leitura de Horas",
    },
    {
      difficulty: "Médio",
      quality: 3,
      subject: "Dinheiro",
      title: "Problemas com Dinheiro",
    },
    {
      difficulty: "Difícil",
      quality: 4,
      subject: "Gráficos",
      title: "Interpretação de Gráficos",
    },
    {
      difficulty: "Fácil",
      quality: 2,
      subject: "Padrões",
      title: "Identificação de Padrões Numéricos",
    },
    {
      difficulty: "Médio",
      quality: 3,
      subject: "Probabilidade",
      title: "Experimentos de Probabilidade",
    },
    {
      difficulty: "Difícil",
      quality: 4,
      subject: "Álgebra",
      title: "Resolução de Equações",
    },
    {
      difficulty: "Fácil",
      quality: 2,
      subject: "Problemas de Palavras",
      title: "Aplicação de Matemática em Situações do Cotidiano",
    },
    {
      difficulty: "Médio",
      quality: 3,
      subject: "Lógica e Raciocínio",
      title: "Quebra-Cabeças Matemáticos",
    },
    {
      difficulty: "Difícil",
      quality: 4,
      subject: "Análise de Dados",
      title: "Interpretação e Análise de Dados",
    },
  ];

  return (
    <Box mt={2} px={4}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h5">Tarefas</Typography>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </IconButton>
      </Box>

      <CreateOrEditTaskModal open={open} setOpen={setOpen} />
      <Grid container spacing={2}>
        {tasks.map((task, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <TaskCard
              difficulty={task.difficulty}
              quality={task.quality}
              subject={task.subject}
              title={task.title}
              id={i}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tarefas;
