import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Stack from "../components/widgets/container/stack";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";

export default function Method({ method, isFilled, css }) {
  const { theme, setTheme } = useTheme();
  const [myTheme, setMyTheme] = useState(getThemeStyle(theme));

  useEffect(() => {
    setMyTheme(getThemeStyle(theme));
  }, [theme]);

  function getThemeStyle(_theme) {
    return _theme === "light" ? darkTheme : lightTheme;
  }
  return (
    <Stack
      css={{
        fontSize: "12px",
        ...myTheme[`method${isFilled ? "_fill" : ""}_${method.toLowerCase()}`],
        alignItems: "center",
        ...css,
      }}
    >
      {method.toUpperCase()}
    </Stack>
  );
}
