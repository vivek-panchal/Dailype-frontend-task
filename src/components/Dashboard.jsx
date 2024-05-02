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
import data from "../utils/data.json";
import formatDate from "../utils/formatDate";
import downArrowIcon from "/assets/images/down-arrow.svg";

const list = data.response;
const Dashboard = () => {
  const data = { nodes: list };
  return (
    <Table data={data}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Borrower</HeaderCell>
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
                <Cell>{item.loan_status}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};

export default Dashboard;
