import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { lightTheme } from "../../../themes/light";
import { darkTheme } from "../../../themes/dark";

export default function Box({ css, children }) {
  const { theme, setTheme } = useTheme();
  const [myTheme, setMyTheme] = useState(getThemeStyle(theme));

  useEffect(() => {
    setMyTheme(getThemeStyle(theme));
  }, [theme]);

  function getThemeStyle(_theme) {
    return _theme === "light" ? darkTheme : lightTheme;
  }

  return <div style={{ ...myTheme.box, ...css }}>{children}</div>;
}
