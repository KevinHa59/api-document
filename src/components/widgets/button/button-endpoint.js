import React, { useState } from "react";
import Stack from "../container/stack";
import Method from "../../../icons/method";

export default function ButtonEndpoint({ css, method, name, onClick }) {
  const [isOver, setIsOver] = useState(false);
  return (
    <Stack
      css={{ gap: "10px", paddingLeft: "5px", cursor: "pointer", alignItems: "flex-start", ...css }}
      onClick={onClick}
      onMouseOver={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <Stack css={{ width: "30px", fontWeight: "500", gap: "10px" }}>
        <Method method={method} />
      </Stack>
      <Stack css={{ opacity: isOver ? 1 : "0.8", textDecoration: isOver && "underline" }}>{name}</Stack>
    </Stack>
  );
}
