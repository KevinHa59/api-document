import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { darkTheme } from "../../themes/dark";
import { lightTheme } from "../../themes/light";
import Stack from "./container/stack";

export default function Divider({ css, direction = "horizontal" }) {
  const { theme, setTheme } = useTheme();
  const [myTheme, setMyTheme] = useState(getThemeStyle(theme));

  useEffect(() => {
    setMyTheme(getThemeStyle(theme));
  }, [theme]);

  function getThemeStyle(_theme) {
    return _theme === "light" ? darkTheme : lightTheme;
  }
  return (
    <Stack>
      <div style={{ ...myTheme[`divider_${direction}`], ...css }} />
    </Stack>
  );
}

Divider.propTypes = {
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
};
