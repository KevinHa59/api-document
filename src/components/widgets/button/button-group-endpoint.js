import React from "react";
import Stack from "../container/stack";
import { ArrowDown, ArrowRight } from "../../../icons/arrow-fill";
import { Folder } from "../../../icons/folder";

export default function ButtonGroupEndpoint({ name, open, onClick }) {
  return (
    <Stack css={{ gap: "10px", alignItems: "center", cursor: "pointer" }} onClick={onClick}>
      {open ? <ArrowDown filled={true} /> : <ArrowRight filled={true} />}
      <Folder />
      {name}
    </Stack>
  );
}
