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
        <head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-6MNJVBJTYM" />
          
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6MNJVBJTYM');
              `,
          }}
        />
        </head>
        <body className={inter.className}>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
