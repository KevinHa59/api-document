import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { lightTheme } from "../themes/light";
import { darkTheme } from "../themes/dark";
import ButtonThemeToggle from "../components/widgets/button/button-theme";
import { useEffect, useState } from "react";
import Box from "../components/widgets/container/box";
import Stack from "../components/widgets/container/stack";
import { baseTheme } from "../themes/base";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const [myTheme, setMyTheme] = useState(getThemeStyle(theme));

  useEffect(() => {
    setMyTheme(getThemeStyle(theme));
  }, [theme]);

  function getThemeStyle(_theme) {
    return _theme === "light" ? lightTheme : darkTheme;
  }

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Stack css={{ background: myTheme.colors.backgroundLinear.value, height: "100vh" }}>
          <style>{myTheme.scrollbar.value.value}</style>
          <ButtonThemeToggle css={{ position: "absolute", bottom: 10, right: 10 }} onchange={setTheme} />
          <Component {...pageProps} />
        </Stack>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
