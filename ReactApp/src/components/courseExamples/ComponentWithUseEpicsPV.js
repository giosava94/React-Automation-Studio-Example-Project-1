import React from "react";
import { Typography } from "@material-ui/core";
import { useEpicsPV } from "React-Automation-Studio/components/SystemComponents/EpicsPV";

function ComponentWithUseEpicsPV(props) {
  const dataPv = useEpicsPV(props);
  return <Typography variant="h5">{dataPv.value}</Typography>;
}

export default ComponentWithUseEpicsPV;
