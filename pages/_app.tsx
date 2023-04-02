import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "@/components/Layout";
import { Container } from "@mui/material";
import Head from "next/head";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

  return (
    <>
      <Head>
        <title>Fincotek Whitepaper</title>
        <meta
          name="description"
          content="Fincotek offer wallet analytics CEX & DEX. A token launch platform web3 ethereum. Based on blockchain technology, our platform offers maximum level of transparency."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Container maxWidth="md">
            <Component {...pageProps} />
          </Container>
        </Layout>
      </ThemeProvider>
    </>
  );
}
