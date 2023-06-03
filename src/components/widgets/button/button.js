import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { darkTheme } from "../../../themes/dark";
import { lightTheme } from "../../../themes/light";

export default function Button({ css, children }) {
  const { theme, setTheme } = useTheme();
  const [myTheme, setMyTheme] = useState(getThemeStyle(theme));
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    setMyTheme(getThemeStyle(theme));
  }, [theme]);

  function getThemeStyle(_theme) {
    return _theme === "light" ? darkTheme : lightTheme;
  }
  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseDown={() => {
        setIsHover(false);
        setTimeout(() => {
          setIsHover(true);
        }, 100);
      }}
      style={{ ...myTheme[`button${isHover ? "_hover" : ""}`], transition: "ease 0.3s", ...css }}
    >
      {children}
    </button>
  );
}
