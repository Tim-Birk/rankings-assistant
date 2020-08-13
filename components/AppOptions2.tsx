import React, { useState } from "react";
import { Form, Row, Col, Select, Input, Button } from "antd";
import { fillAdpPicks } from "../utils/helper";
import styled from "styled-components";
import { start } from "repl";

const { Option } = Select;

const StyledInput = styled(Input)`
  ${({ theme }) => `
       margin-left: 8px;
       margin-right: 8px;
       width: 60px;
    `}
`;
const StyledRow = styled(Row)`
  ${({ theme }) => `
       display: flex;
       justify-content: space-around;
    `}
`;

const StyledFormItem = styled(Form.Item)`
  ${({ theme }) => `
       .ant-form-item-control {
        display: flex;
        
       }
    `}
`;

const StyledSelect = styled(Select)`
  ${({ theme }) => `
       max-width: 80px;
    `}
`;

const StyledNewButton = styled(Button)`
  ${({ theme }) => `
        margin-left: 24px;
        width: 80px;
    `}
`;

const AppOptions = () => {
  const [numberTopPlayers, setNumberTopPlayers] = useState(25);
  const [currentPosition, setCurrentPosition] = useState("RB");
  const [defaultRanks, setDefaultRanks] = useState([]);

  const startNew = () => {
   
  };
  return (
    <Form>
      <StyledRow>
        <Col span={24} offset={1}>
          <StyledFormItem
            label="Top Players at Position"
            name="numberTopPlayers"
            initialValue={25}
          >
            <StyledInput
              value={numberTopPlayers}
              onChange={(e) => setNumberTopPlayers(e.target.value)}
              type="number"
              required
            />
          </StyledFormItem>
        </Col>
        <Col span={24} offset={1}>
          <Form.Item label="Position" name="position">
            <StyledSelect
              placeholder="Position"
              value={currentPosition}
              defaultValue={currentPosition}
              onChange={(value) => setCurrentPosition(value)}
            >
              <Option key="QB" value={"QB"}>
                QB
              </Option>
              <Option key="RB" value={"RB"}>
                RB
              </Option>
              <Option key="WR" value={"WR"}>
                WR
              </Option>
              <Option key="TE" value={"TE"}>
                TE
              </Option>
            </StyledSelect>
          </Form.Item>
        </Col>
      </StyledRow>
      <Col span={24}>
        <StyledNewButton block type="primary" onClick={() => startNew()}>
          New
        </StyledNewButton>
      </Col>
    </Form>
  );
};

export default AppOptions;
