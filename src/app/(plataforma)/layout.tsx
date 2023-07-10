"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// Icons
import DashboardIcon from "@icons/DashboardIcon.svg";
import MenuIcon from "../../../public/icons/MenuIcon.svg";
import LogOutIcon from "../../../public/icons/LogOutIcon.svg";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

// Styles
import styles from "./layout.module.scss";

export const pagesList = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    url: "/",
  },
  {
    icon: <TaskAltIcon />,
    name: "Tarefas",
    url: "/tarefas",
  },
];

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(true);

  return (
    <div className={[styles.layout, openMenu && styles.closed].join(" ")}>
      <nav className={styles.sidebar}>
        <div className={styles.logo2}>
          <Image
            width={80}
            height={40}
            quality={100}
            unoptimized={true}
            src={"/imgs/logo.jpg"}
            alt="Logotipo da focuson"
            className={styles.logo}
          />
        </div>
        <ul>
          {pagesList.map((page, i) => (
            <li key={i} className={pathname == page.url ? styles.active : ""}>
              <Link href={page.url}>
                {page.icon} <span>{page.name}</span>
              </Link>
            </li>
          ))}
          <li className={styles.sair}>
            <Link
              href={"/login"}
              onClick={() =>
                window.localStorage.removeItem("focuson_login_user")
              }
            >
              <LogOutIcon /> <span>Sair</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.navbar}>
        <MenuIcon
          onClick={() => setOpenMenu((prev) => !prev)}
          className={styles.menu}
        />
        <div className={styles.breadcrumbs}>
          <span>Dashboard</span>
        </div>
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default RootLayout;
