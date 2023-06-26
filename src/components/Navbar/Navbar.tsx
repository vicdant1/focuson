import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.root}>
        <AppBar position="static" style={{ backgroundColor: "#E5421F" }}>
          <Toolbar>
            <Typography variant="h6" className={styles.title}>
              <a href="/home">
                <Avatar src="/logo.jpg" className={styles.avatar} />
              </a>
            </Typography>
            <Button color="inherit">
              <a href="/tarefas">Tarefas</a>
            </Button>
            <Button color="inherit">
              <a href="/playground">Playground</a>
            </Button>
            <Button color="inherit" href="/material">
              <a href="/material">Material</a>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
