import { ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import Footer from "@/app/component/Footer";
import Nav from "@/app/component/Nav";
import theme from "@/app/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Menuki",
  description: "mekuki-website",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
