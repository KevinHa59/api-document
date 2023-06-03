import React, { useEffect, useRef, useState } from "react";
import Box from "../components/widgets/container/box";
import Stack from "../components/widgets/container/stack";
import data from "./data.json";
import EndpointList from "../components/index/endpoint-list";
import { baseTheme } from "../themes/base";
import Divider from "../components/widgets/divider";
import ButtonTab from "../components/widgets/button/button-tab";
import EndpointTab from "../components/index/endpoint-tab";
import { Download, Upload } from "../icons/upload-download";
import ButtonIcon from "../components/widgets/button/button-icon";
import EndpointDetail from "../components/index/endpoint-detail";

export default function index() {
  const tabBar = useRef(null);
  const [endpointData, setEndpointData] = useState(convertData(data.item));
  const [selectedTab, setSelectedTab] = useState(-1);
  const [selectedEndpoints, setSelectedEndpoints] = useState([]);
  const [selectedEndpointDetail, setSelectedEndpointDetail] = useState(null);
  const handleEndpointClick = (ep) => {
    const newSelected = addEndpointToTabs(selectedEndpoints, ep);
    setSelectedEndpoints(newSelected.newData);
    setSelectedTab(newSelected.id);
    setSelectedEndpointDetail(ep);
    if (newSelected.newData.length > selectedEndpoints.length && tabBar.current) {
      setTimeout(() => {
        tabBar.current.scrollLeft = tabBar.current.scrollWidth;
      }, 0);
    } else {
      const tabElement = tabBar.current.children[newSelected.index - 1];
      if (tabElement) {
        tabElement.scrollIntoView({ behavior: "smooth", inline: "nearest" });
      }
    }
  };

  const handleTabClick = (item, index) => {
    setSelectedTab(item.id);
    setSelectedEndpointDetail(item);
    const tabElement = tabBar.current.children[index];
    if (tabElement) {
      tabElement.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  const handleCloseTab = (id, index) => {
    const copy = [...selectedEndpoints];
    if (id !== selectedTab) {
      copy.splice(index, 1);
    } else {
      copy.splice(index, 1);
      // delete last one, active previous one
      if (copy.length > 1 && index === copy.length) {
        setSelectedTab(copy[copy.length - 1].id);
        setSelectedEndpointDetail(copy[copy.length - 1]);
      }
      // delete center one, active next one
      else if (copy.length > 1 && index < copy.length) {
        setSelectedTab(copy[index].id);
        setSelectedEndpointDetail(copy[index]);
      }
      // delete last and only one
      else if (copy.length === 1) {
        setSelectedTab(copy[0].id);
        setSelectedEndpointDetail(copy[0]);
      } else {
        setSelectedEndpointDetail(null);
      }
    }
    setSelectedEndpoints(copy);
  };

  const handleJsonFileSelect = (data) => {
    setEndpointData([]);
    setSelectedEndpointDetail(null);
    setTimeout(() => {
      setEndpointData(convertData(data.item));
      setSelectedTab(-1);
      setSelectedEndpoints([]);
    }, 0);
  };

  return (
    <Stack css={{ padding: "50px", width: "100%" }}>
      <Box css={{ minWidth: "100%", minHeight: "100%" }}>
        <Stack css={{ height: "100%", flexDirection: "column" }}>
          <Stack
            css={{
              padding: "5px",
              gap: "5px",
              height: "40px",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <ButtonIcon buttonType={"file"} icon={<Upload />} onFileSelect={handleJsonFileSelect} />
            <ButtonIcon icon={<Download />} />
          </Stack>
          <Divider />
          <Stack
            css={{
              flexDirection: "column",
              padding: "10px",
              minWidth: "300px",
              maxWidth: "300px",
              height: "100%",
              overflowY: "auto",
            }}
          >
            <EndpointList data={endpointData} onEndpointClick={handleEndpointClick} />
          </Stack>
        </Stack>
        <Divider direction="vertical" />
        <Stack css={{ width: "calc(100% - 300px)", flexDirection: "column", gap: "10px" }}>
          <Stack css={{ height: "41px", flexDirection: "column" }}>
            <EndpointTab
              componentRef={tabBar}
              selectedEndpoints={selectedEndpoints}
              selectedTab={selectedTab}
              onClick={handleTabClick}
              onClose={(id, index) => handleCloseTab(id, index)}
            />
            <Divider />
          </Stack>

          <Stack>{selectedEndpointDetail && <EndpointDetail endpoint={selectedEndpointDetail} />}</Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

function addEndpointToTabs(tabs, endpoint) {
  const index = tabs.findIndex((item) => item.id === endpoint.id);
  if (index === -1) {
    return { newData: [...tabs, endpoint], index: tabs.length + 1, id: endpoint.id };
  } else {
    return { newData: [...tabs], index: index + 1, id: endpoint.id };
  }
}

function convertData(data) {
  const newData = addIDtoEndpoint(data);
  currentID = 1;
  return newData;
}
let currentID = 1;
function addIDtoEndpoint(data) {
  return data.map((item) => {
    const newItem = { ...item };
    const isGroup = item.request === undefined;
    if (isGroup) {
      newItem.item = addIDtoEndpoint(item.item);
    } else {
      newItem["id"] = currentID;
      currentID++;
    }
    return newItem;
  });
}
