"use client";

import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";

export function CustomProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
