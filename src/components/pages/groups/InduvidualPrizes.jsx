import React from "react";
import { mockGroup } from "../../mock/groups";
import {
  Box,
  PhoneNumber,
  ShowAll,
  ShowPercent,
  StatusActive,
  Table,
  TableBegin,
  TableCell,
  TableHead,
  TableTr,
  TableValue,
} from "./groupsStyle";
import { Icon } from "@mui/material";

const IndividualPrices = () => {
  const data = mockGroup.groupInfo;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "1200px",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <TableBegin>
        <ShowAll>
          <Icon />
          Show all
        </ShowAll>
      </TableBegin>
      <Table>
        <thead>
          <tr>
            <TableHead></TableHead>
            <TableHead>FULL NAME</TableHead>
            <TableHead>PHONE NUMBER</TableHead>
            <TableHead>INDIVIDUAL DISCOUNT</TableHead>
            <TableHead>COMMENTS</TableHead>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            return (
              <TableTr key={key}>
                <TableCell>
                  <TableValue>{value.id || "no data"}</TableValue>
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      gap: "3px",
                    }}
                  >
                    {value.group.teacher || "no data"}
                    <StatusActive>ACTIVE</StatusActive>
                  </div>
                </TableCell>
                <TableCell>010-5834-7771</TableCell>
                <TableCell>
                  <PhoneNumber>
                    <StatusActive>100.000</StatusActive>
                    <ShowPercent>+100%</ShowPercent>
                    <Box>
                      <Icon />
                    </Box>
                  </PhoneNumber>
                </TableCell>
                <TableCell>Lorem ipsu do sit amor</TableCell>
              </TableTr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default IndividualPrices;
