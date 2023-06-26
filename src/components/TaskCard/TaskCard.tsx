import { Card, CardContent, Chip, Rating, Typography } from '@mui/material';
import React from 'react';

import styles from './TaskCard.module.css'
import { ITaskCardProps } from '@/interfaces/ITaskCardProps';

const TaskCard = ({ title, quality, difficulty, subject } : ITaskCardProps) => {
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
        <Chip className={styles.label} label={subject} color="primary" variant="outlined" />
      </CardContent>
    </Card>
  );
};

export default TaskCard;
