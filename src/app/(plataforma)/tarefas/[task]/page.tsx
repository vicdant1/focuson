"use client";

import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import SolvingElement from "@/components/SolvingElement/SolvingElement";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import presetTasks from "@mocks/tasks.json"
import { ITask } from "@/interfaces/ITask";

interface ITaskPageParams {
  task: number;
}

// implementar dnd a partir desse video https://www.youtube.com/watch?v=swFjfjLXe3I&ab_channel=FaztCode

export default function Task({ task }: ITaskPageParams) {

  console.log(task) // ta vindo undefined
  // const tasks:ITask[] = presetTasks;
  // const currentTask = Math.floor(task % tasks.length);

  const currentTask:ITask = presetTasks[0];
  return (
    <>
      {task}

      <Box
        sx={{
          backgroundColor: "#FFF",
          p: 2,
          minHeight: "70vh",
        }}
      >
        <Box mb={2} display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">{currentTask.name}</Typography>

          <Link href="/tarefas">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </Box>

        <Typography>
          {currentTask.description}
        </Typography>

        <Divider/>

        <Box mt={2}>
          <Typography variant="h5">Possibilidades</Typography>
          <Box
            my={2}
            borderRadius={2}
            p={1}
            py={4}
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            sx={{
              backgroundColor: "#FFCA",
            }}
          >
            <SolvingElement expression="Abluble"/>
            <SolvingElement expression="Abluble"/>
            <SolvingElement expression="Abluble"/>
          </Box>

          <Typography variant="h5">Expressão final</Typography>
          <Box
            my={2}
            borderRadius={2}
            p={1}
            py={4}
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            sx={{
              backgroundColor: "#FFCA",
            }}
          >
            <SolvingElement expression="Abluble"/>
            <SolvingElement expression="Abluble"/>
            <SolvingElement expression="Abluble"/>
          </Box>

          <Box mt={4} display="flex" justifyContent="end">
            <Button color="success" variant="contained" endIcon={<CheckCircleIcon />}>
              Validar
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
