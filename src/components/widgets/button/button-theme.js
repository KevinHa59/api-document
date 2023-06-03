import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { SunIcon } from "../../../icons/sun";
import { MoonIcon } from "../../../icons/moon";

function ButtonThemeToggle({ onchange, css }) {
  const { theme, setTheme } = useTheme();
  const [isCheck, setIsCheck] = useState(false);

  const toggleTheme = (value) => {
    const _theme = value.target.checked === true ? "dark" : "light";
    setTheme(_theme);
    onchange && onchange(_theme);
  };

  return (
    <Switch
      style={{ ...css }}
      checked={isCheck}
      size="md"
      iconOn={<SunIcon filled />}
      iconOff={<MoonIcon filled />}
      onChange={toggleTheme}
    />
  );
}

export default ButtonThemeToggle;
