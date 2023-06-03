import React, { useEffect, useState } from "react";
import Stack from "../widgets/container/stack";
import ButtonEndpoint from "../widgets/button/button-endpoint";
import ButtonGroupEndpoint from "../widgets/button/button-group-endpoint";
import { baseTheme } from "../../themes/base";

export default function EndpointList({ data, onEndpointClick }) {
  return (
    <Stack css={{ flexDirection: "column", fontSize: "14px", gap: 10 }}>
      {data.map((endpoint, index) => {
        return <EndpointRead key={index} item={endpoint} onEndpointClick={onEndpointClick} index={index} />;
      })}
    </Stack>
  );
}

function EndpointRead({ item, onEndpointClick, isParent = true, index }) {
  const [open, setOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const isGroup = item.response === undefined;

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, index * 30);
  }, []);

  if (isGroup) {
    const newItemList = item.item;
    return (
      <Stack
        css={{
          flexDirection: "column",
          gap: "5px",
          borderLeft: "1px solid rgba(255,255,255,0.3)",
          opacity: isShow ? 1 : 0,
          paddingLeft: isShow ? "0px" : "20px",
          transition: "ease 0.2s",
        }}
      >
        <ButtonGroupEndpoint name={item.name} open={open} onClick={() => setOpen(!open)} />
        {open &&
          newItemList?.map((newItem, index) => {
            return (
              <Stack key={index} css={{ paddingLeft: "20px" }}>
                <EndpointRead item={newItem} onEndpointClick={onEndpointClick} isParent={false} />
              </Stack>
            );
          })}
      </Stack>
    );
  } else {
    return (
      <ButtonEndpoint
        css={{ opacity: isShow ? 1 : 0, paddingLeft: isShow ? "0px" : "20px", transition: "ease 0.2s" }}
        method={item.request.method}
        name={item.name}
        onClick={() => onEndpointClick(item)}
      />
    );
  }
}
