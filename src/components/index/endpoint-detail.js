import React from "react";
import Stack from "../widgets/container/stack";
import Method from "../../icons/method";
import { methodColor } from "../../utils";
import TextField from "../widgets/input/textfield";
import Button from "../widgets/button/button";

export default function EndpointDetail({ endpoint }) {
  const name = endpoint.name;
  const method = endpoint.request.method.toLowerCase();
  const description = endpoint.request.description;
  const url = endpoint.request.url.raw;
  const color = methodColor(method);

  return (
    <Stack css={{ padding: " 10px 20px 10px 20px", flexDirection: "column", gap: "15px", width: "100%" }}>
      <Stack css={{ gap: "10px", fontSize: "20px", fontWeight: "bold", borderBottom: `1px solid ${color}`, width: "max-content" }}>
        <Method css={{ fontSize: "20px" }} isFilled={true} method={method} /> {name}
      </Stack>
      <Stack>Description: {description}</Stack>
      <Stack>
        <TextField value={url} css={{ width: "100%" }} />
        <Button>RUN</Button>
      </Stack>
    </Stack>
  );
}
