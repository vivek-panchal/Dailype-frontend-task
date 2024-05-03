import * as React from "react";
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Row,
  Body,
  Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import data from "../utils/data.json";
import formatDate from "../utils/formatDate";
import downArrowIcon from "/assets/images/down-arrow.svg";
import greenTick from "/assets/images/green-tick.svg";
import redCross from "/assets/images/red-cross.png";
import clock from "/assets/images/clock.svg";
import dashCircle from "/assets/images/dash-circle.svg"

const list = data.response;
const THEME = {
  Table: `
    width: 100%;
    border-radius: 20px;
  `,
  HeaderRow: `
    background-color: #9AC0FF;
  `,
  HeaderCell: `
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #5476a8;
    font-weight: 500;
    min-width: 150px;
  `,
  Cell: `
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: bold;
    min-width: 150px;
  `,
  Row: `
    font-size: 14px;
    &:nth-child(odd) {
      background-color: #d2e9fb;
    }
    &:nth-child(even) {
      background-color: #eaf5fd;
    }
  `,
  Header: `
    width: 100%;
    white-space: nowrap; 
  `,
};
const Dashboard = () => {
  const data = { nodes: list };
  const theme = useTheme(THEME);
  return (
    <div className="p-4">
      <Table data={data} theme={theme}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>
                  <span>Borrower</span>
                </HeaderCell>
                <HeaderCell>Loan Reference Num</HeaderCell>
                <HeaderCell>
                  <span className="flex gap-1 items-center">
                    Origination Date{" "}
                    <img src={downArrowIcon} className="w-5 h-10" />
                  </span>
                </HeaderCell>
                <HeaderCell>Status</HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map((item) => (
                <Row key={item.user_id} item={item}>
                  <Cell>{`${item.fname || ""} ${item.mname || ""} ${
                    item.lname || ""
                  }`}</Cell>
                  <Cell>{item.loan_acc_num}</Cell>
                  <Cell>{formatDate(item.loan_created_at)}</Cell>
                  <Cell>
                    {item.loan_status.toLowerCase() == "active" ? (
                      <span className="flex items-center">
                        <img src={greenTick} className="h-4 w-4" />{" "}
                        <span className="text-green-600">
                          {item.loan_status}
                        </span>
                      </span>
                    ) : item.loan_status.toLowerCase() == "rejected" ? (
                      <span className="flex items-center gap-1">
                        <img src={redCross} className="h-3 w-3" />{" "}
                        <span className="text-red-600">{item.loan_status}</span>
                      </span>
                    ) : item.loan_status.toLowerCase() == "approved" ? (
                      <span className="flex items-center gap-1">
                        <img src={dashCircle} className="h-5 w-5" />{" "}
                        <span className="text-[#d64e3c] font-medium">
                          {"Esign Pending"}
                        </span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <img src={clock} className="h-5 w-5" />{" "}
                        <span className="text-[#e3b263]">
                          {item.loan_status}
                        </span>
                      </span>
                    )}
                  </Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </div>
  );
};

export default Dashboard;