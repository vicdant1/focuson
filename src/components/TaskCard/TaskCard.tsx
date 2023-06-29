import { Box, Button, Card, CardContent, Chip, IconButton, Rating, Typography } from '@mui/material';
import React from 'react';

import styles from './TaskCard.module.css'
import { ITaskCardProps } from '@/interfaces/ITaskCardProps';
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';

const TaskCard = ({ title, quality, difficulty, subject, id } : ITaskCardProps) => {
  return (
    <Card className={styles.root}>
      <CardContent>
        <Typography className={styles.title} gutterBottom noWrap>
          {title}
        </Typography>
        <div className={styles.stars}>
          <Rating value={quality} readOnly size="small" />
        </div>
        <Typography className={styles.difficulty} variant="subtitle1">
          Dificuldade: {difficulty}
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Chip className={styles.label} label={subject} color="primary" variant="outlined" />

          <Link href={`/tarefas/${id}`}>
            <IconButton color='primary'>
              <SendIcon/>
            </IconButton>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
