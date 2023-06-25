import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";

import styles from './Navbar.module.css'
import Link from "next/link";

const Navbar = () => {
  return <>
    <div className={styles.root}>
      <AppBar position="static" style={{backgroundColor: "#E5421F"}}>
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            <Link href="/home">
              <Avatar src="/logo.jpg" className={styles.avatar} />
            </Link>
          </Typography>
          <Button color="inherit" >
            <Link href="/tarefas">
              Tarefas
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/playground">
              Playground
            </Link>
          </Button>
          <Button color="inherit" href="/material">
            <Link href="/material">
              Material
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  </>
}


export default Navbar;