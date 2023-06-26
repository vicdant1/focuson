import { ReactNode } from "react";

// Components
import { Toast } from "@components/Toast";

export const metadata = {
  title: "Focus On",
  description: "Plataforma digital de aprendizado",
};

// Fonts
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// Styles
import "./globals.scss";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>
        {children}
        <Toast />
      </body>
    </html>
  );
};

export default RootLayout;
