import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, InputLabel, MenuItem, Select, Box, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';

interface IModalProps {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function CreateOrEditTaskModal({open, setOpen}:IModalProps) {

  const mathTopics = [
    'Adição',
    'Subtração',
    'Multiplicação',
    'Divisão',
    'Frações',
    'Decimais',
    'Valor Posicional',
    'Geometria',
    'Medidas',
    'Tempo',
    'Dinheiro',
    'Gráficos',
    'Padrões',
    'Probabilidade',
    'Álgebra',
    'Problemas de Palavras',
    'Lógica e Raciocínio',
    'Análise de Dados',
  ];

  return (
    <div>
      <Dialog open={open} fullWidth>
        <DialogTitle>Nova tarefa</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Título"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Descrição"
            type="text"
            fullWidth
            variant="standard"
          />
          <FormControl fullWidth style={{marginTop: 6}}>
            <InputLabel id="series-label">Série do Ensino</InputLabel>
            <Select
              labelId="series-label"
            >
              <MenuItem value="iniciais">Anos iniciais</MenuItem>
              <MenuItem value="fundamental1">Ensino Fundamental I</MenuItem>
              <MenuItem value="fundamental2">Ensino Fundamental II</MenuItem>
            </Select>
          </FormControl>

          <Box mt={2}>
            <Typography>
              Grau de dificuldade
            </Typography>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
          </Box>

          <FormControl fullWidth style={{marginTop: 6}}>
            <InputLabel id="series-label">Conteúdo</InputLabel>
            <Select
              labelId="series-label"
            >
              {mathTopics.map((topic, index) => (
                <MenuItem value={index} key={index}>
                  <Typography variant="body1">{topic}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={() => setOpen(false)}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}