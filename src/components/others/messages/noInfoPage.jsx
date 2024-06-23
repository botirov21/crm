import React from "react";
import { useNavigate } from "react-router-dom";


import noinfo from "../../../assets/noinfopageasset.svg"

import { Button } from "@mui/material";
import { NoInfoPage } from "./messegeStyle";
const NoInformationPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(-1);
  }

  return (
    <NoInfoPage>
      <div class="mainbox">
        <div className="assets">
          <img src={noinfo} alt="asset" />
        </div>
        <div class="msg">
          <p>Soon Informations will be added</p>
            <Button onClick={handleNavigate}>Back to previous page</Button>
        </div>
      </div>
    </NoInfoPage>
  );
};

export default NoInformationPage;
