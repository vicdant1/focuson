"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// Icons
import DashboardIcon from "@icons/DashboardIcon.svg";
import MenuIcon from "../../../public/icons/MenuIcon.svg";
import LogOutIcon from "../../../public/icons/LogOutIcon.svg";

// Cookies
import Cookies from "universal-cookie";

// Styles
import styles from "./layout.module.scss";

export const pagesList = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    url: "/",
  },
];

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const router = useRouter();
  const cookies = new Cookies();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  // Verifica se tem um token disponível
  // useEffect(() => {
  //   if (!cookies.get("grt8_session_token")) {
  //     router.push("/login");
  //   }
  // }, []);

  return (
    <div className={[styles.layout, openMenu && styles.closed].join(" ")}>
      <nav className={styles.sidebar}>
        <div className={styles.logo2}>
          <Image
            width={80}
            height={40}
            quality={100}
            unoptimized={true}
            src={"/imgs/logo2white.png"}
            alt="Logotipo da grt8"
            className={styles.logo}
          />
        </div>
        <ul>
          {pagesList.map((page) => (
            <li
              key={page.name}
              className={pathname == page.url ? styles.active : ""}
            >
              <Link href={page.url}>
                {page.icon} <span>{page.name}</span>
              </Link>
            </li>
          ))}
          <li className={styles.sair}>
            <Link
              href={"/login"}
              onClick={() => cookies.remove("grt8_session_login")}
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
