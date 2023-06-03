import React, { useState } from "react";
import Stack from "../widgets/container/stack";
import ButtonTab from "../widgets/button/button-tab";

export default function EndpointTab({ componentRef, selectedEndpoints, selectedTab, onClick, onClose }) {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <Stack
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      componentRef={componentRef}
      css={{
        width: "100%",
        flexWrap: "nowrap",
        flexDirection: "row",
        overflowX: mouseOver ? "auto" : "hidden",
        transition: "ease 0.2s",
        gap: 1,
        height: "40px",
        padding: "5px",
      }}
    >
      {selectedEndpoints?.map((item, index) => {
        return (
          <ButtonTab
            css={{ height: "25px" }}
            key={index}
            item={item}
            isActive={selectedTab === item.id}
            onClose={() => onClose(item.id, index)}
            onClick={() => onClick(item, index)}
          />
        );
      })}
    </Stack>
  );
}
