"use client";

import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import SolvingElement from "@/components/SolvingElement/SolvingElement";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { toast } from "react-toastify";


import presetTasks from "@mocks/tasks.json";
import { ITask } from "@/interfaces/ITask";
import { useEffect, useState } from "react";

interface ITaskPageParams {
  params: {
    task: number;
  };
}

// implementar dnd a partir desse video https://www.youtube.com/watch?v=swFjfjLXe3I&ab_channel=FaztCode

export default function Task({ params: { task } }: ITaskPageParams) {
  const tasks: ITask[] = presetTasks;
  const currentTaskIndex = Math.floor(task % tasks.length);
  const [currentTask, setCurrentTask] = useState<ITask>(presetTasks[0]);

  const handleExpressionValidation = () => {
    let isOrdered = true;
    for(let i = 0; i < currentTask.steps.length; i++){
      if(i + 1 > currentTask.steps.length - 1) break

      if(currentTask.steps[i].order >= currentTask.steps[i + 1].order)
        isOrdered = false;
    }

    if(isOrdered)
      toast.success("Expressão ordenada corretamente!");
    else
      toast.error("Não foi dessa vez, tente novamente!");
  }

  useEffect(() => {
    setCurrentTask(presetTasks[currentTaskIndex]);    
  }, []);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          backgroundColor: "#FFF",
          p: 2,
          minHeight: "70vh",
        }}
      >
        <Box>
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5">{currentTask.name}</Typography>

            <Link href="/tarefas">
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </Box>

          <Typography>{currentTask.description}</Typography>
          <Divider />

          <Box
            mt={2}
          >
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
              {currentTask.steps.map((step, i) => {
                return <SolvingElement key={i} expression={step.displayText} />;
              })}
            </Box>
          </Box>
        </Box>

        <Box display="flex" justifyContent="end">
          <Button
            color="success"
            variant="contained"
            onClick={handleExpressionValidation}
            endIcon={<CheckCircleIcon />}
          >
            Validar
          </Button>
        </Box>
      </Box>
    </>
  );
}
