"use client";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import PageTransition from "@/components/PageTransition";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F59E0B"
    },
    secondary: {
      main: "#1F2937"
    },
    background: {
      default: "#FAF3E0",
      paper: "#ffffff"
    },
    text: {
      primary: "#1F2937"
    }
  },
  typography: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    h1: {
      fontFamily: "var(--font-playfair), serif"
    },
    h2: {
      fontFamily: "var(--font-playfair), serif"
    },
    h3: {
      fontFamily: "var(--font-playfair), serif"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
          boxShadow: "0 10px 25px rgba(0,0,0,0.12)"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0 18px 35px rgba(0,0,0,0.08)"
        }
      }
    }
  }
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const memoTheme = useMemo(() => theme, []);

  return (
    <ThemeProvider theme={memoTheme}>
      <CssBaseline />
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}>{children}</PageTransition>
      </AnimatePresence>
    </ThemeProvider>
  );
}
