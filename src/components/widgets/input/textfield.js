import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { darkTheme } from "../../../themes/dark";
import { lightTheme } from "../../../themes/light";

export default function TextField({ value, defaultValue, onChange, css }) {
  const { theme, setTheme } = useTheme();
  const [myTheme, setMyTheme] = useState(getThemeStyle(theme));
  const [isFocus, setIsFocus] = useState(false);
  const [isOver, setIsOver] = useState(false);
  useEffect(() => {
    setMyTheme(getThemeStyle(theme));
  }, [theme]);

  function getThemeStyle(_theme) {
    return _theme === "light" ? darkTheme : lightTheme;
  }
  return (
    <input
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      style={{ ...myTheme[`text_field${isFocus || isOver ? "_focus" : ""}`], ...css, transition: "ease 0.2s" }}
    />
  );
}
