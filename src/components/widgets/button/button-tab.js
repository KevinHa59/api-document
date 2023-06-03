import React, { useEffect, useState } from "react";
import Stack from "../container/stack";
import Method from "../../../icons/method";
import { useTheme } from "next-themes";
import { darkTheme } from "../../../themes/dark";
import { lightTheme } from "../../../themes/light";
import { baseTheme } from "../../../themes/base";
import { X } from "../../../icons/x";

export default function ButtonTab({ item, css, onClick, onClose, isActive }) {
  const { theme, setTheme } = useTheme();
  const [myTheme, setMyTheme] = useState(getThemeStyle(theme));
  const [activeRemove, setActiveRemove] = useState(false);
  useEffect(() => {
    setMyTheme(getThemeStyle(theme));
  }, [theme]);

  function getThemeStyle(_theme) {
    return _theme === "light" ? darkTheme : lightTheme;
  }

  const handleRemoveTab = (event) => {
    event.stopPropagation();
    setActiveRemove(true);
    setTimeout(() => {
      onClose && onClose();
      setActiveRemove(false);
    }, 300);
  };
  return (
    <Stack
      css={{
        ...myTheme[`button_tab${isActive ? "_active" : ""}`],
        maxWidth: activeRemove ? "0px" : "500px",
        transformOrigin: "left",
        transition: activeRemove && "ease-out 0.3s",
        ...css,
      }}
      onClick={onClick}
    >
      <Stack css={{ overflow: "hidden", gap: "5px", alignItems: "center" }}>
        <Method method={item.request.method.toLowerCase()} isFilled={true} />
        {item.name}
        <Stack onClick={handleRemoveTab}>
          <X color={"red"} />
        </Stack>
      </Stack>
    </Stack>
  );
}
