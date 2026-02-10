import { IBM_Plex_Sans } from "next/font/google";
import "../styles/css/app.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Juicy.",
  description: "An introduction to Juicy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable}`}>{children}</body>
    </html>
  );
}
