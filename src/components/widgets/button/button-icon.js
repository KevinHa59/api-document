import React, { useEffect, useState } from "react";
import Stack from "../container/stack";
import { useTheme } from "next-themes";
import { darkTheme } from "../../../themes/dark";
import { lightTheme } from "../../../themes/light";

export default function ButtonIcon({ icon, buttonType, onFileSelect, css, onClick }) {
  const { theme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [myTheme, setMyTheme] = useState(getThemeStyle(theme));

  useEffect(() => {
    setMyTheme(getThemeStyle(theme));
  }, [theme]);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  function getThemeStyle(_theme) {
    return _theme === "light" ? darkTheme : lightTheme;
  }
  return (
    <Stack
      css={{
        ...myTheme[`button_icon_default${isHovered ? "_hover" : ""}`],
        borderRadius: "4px",
        border: "1px solid rgba(255,255,255,0.2)",
        ...css,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      buttonType={buttonType}
      onFileSelect={buttonType === "file" ? onFileSelect : null}
    >
      {icon}
    </Stack>
  );
}
