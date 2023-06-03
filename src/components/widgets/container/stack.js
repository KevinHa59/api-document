import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import { lightTheme } from "../../../themes/light";
import { darkTheme } from "../../../themes/dark";

export default function Stack({
  componentRef,
  onFileSelect,
  buttonType = null,
  css,
  children,
  onClick = null,
  onMouseOver,
  onMouseLeave,
  onMouseEnter,
}) {
  const { theme, setTheme } = useTheme();
  const [myTheme, setMyTheme] = useState(getThemeStyle(theme));
  const fileRef = useRef(null);
  useEffect(() => {
    setMyTheme(getThemeStyle(theme));
  }, [theme]);

  function getThemeStyle(_theme) {
    return _theme === "light" ? darkTheme : lightTheme;
  }
  function buttonClick(event) {
    if (buttonType === "file") {
      fileRef.current.click();
    } else {
      onClick && onClick(event);
    }
  }
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Do something with the selected file
      const fileReader = new FileReader();
      fileReader.onload = handleFileRead;
      fileReader.readAsText(selectedFile);
    }
  };
  const handleFileRead = (event) => {
    const content = event.target.result;
    const jsonData = JSON.parse(content);
    onFileSelect && onFileSelect(jsonData);
  };
  return (
    <div
      ref={componentRef}
      style={{ ...myTheme.stack, ...css }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onClick={buttonClick}
    >
      {children}
      <input
        onChange={handleFileSelect}
        accept=".json"
        style={{ opacity: fileRef !== null && 0, height: "0px", width: "0px" }}
        ref={fileRef}
        type="file"
      />
    </div>
  );
}
