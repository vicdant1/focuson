import Navbar from "@/components/Navbar/Navbar";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CreateOrEditTaskModal from "@/components/CreateOrEditTaskModal/CreateOrEditTaskModal";
import { useState } from "react";

const Tarefas = () => {

  const [open, setOpen] = useState(false);


  return <>
    <Navbar/>
    <Box mt={2} px={4}>
      <Typography variant="h5">Tarefas</Typography>

      <Box display="flex" alignItems="center" justifyContent="end">
        <IconButton aria-label="delete" size="large" onClick={() => setOpen(true)}>
          <AddIcon />
        </IconButton>
      </Box>

      <CreateOrEditTaskModal open={open} setOpen={setOpen}/>

    </Box>
  </>
}

export default Tarefas;