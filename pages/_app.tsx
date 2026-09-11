import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { light } from "../scss/MaterialTheme";
import {useState} from "react";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // Socket.io connection , Redux store, and other global providers can be added here
  return  <ThemeProvider theme={theme}><CssBaseline /><Component {...pageProps} /></ThemeProvider>;
}
