import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-nunito",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Alison Hardy",
  description: "Software developer and CS+Business student at UBC",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&family=Poppins:wght@200;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${nunito.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
