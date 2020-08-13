import React, { useState } from "react";
import { Form, Row, Col, Select } from "antd";
import { fillAdpPicks } from "../utils/helper";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  ${({ theme }) => `
       max-width: 80px;
    `}
`;
const StyledRow = styled(Row)`
  ${({ theme }) => `
       display: flex;
       justify-content: space-around;
    `}
`;

const { Option } = Select;
const defaultPicks = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const AppOptions = () => {
  const [numberOfTeams, setNumberOfTeams] = useState("12");
  const [picks, setPicks] = useState(defaultPicks);
  const [adpStartRound, setAdpStartRound] = useState("2");
  const [adpStartPick, setAdpStartPick] = useState("1");
  const [adpEndRound, setAdpEndRound] = useState("2");
  const [adpEndPick, setAdpEndPick] = useState("1");
  

  const fillPicks = (newNumberTeams: string) => {
    // setAdpStartPick("1");
    // setAdpEndPick(newNumberTeams);
    setNumberOfTeams(newNumberTeams);
    const newPicks = fillAdpPicks(newNumberTeams);
    setPicks(newPicks);
  };
  return (
    <Form
      initialValues={{
        numberOfTeams,
        adpStartRound,
        adpStartPick,
        adpEndRound,
        adpEndPick,
      }}
    >
      <StyledRow>
        <Form.Item label="# Teams" name="numberOfTeams">
          <StyledSelect
            placeholder="# Teams"
            value={numberOfTeams}
            onChange={(value) => {
              fillPicks(value);
            }}
          >
            <Option key="8" value={"8"}>
              8
            </Option>
            <Option key="10" value={"10"}>
              10
            </Option>
            <Option key="12" value={"12"}>
              12
            </Option>
          </StyledSelect>
        </Form.Item>
      </StyledRow>

      <StyledRow>
        <Col span={6}>
          <Form.Item label="Round" name="adpRoundStart">
            <StyledSelect
              placeholder="Round"
              value={adpStartRound}
              defaultValue={adpStartRound}
              onChange={(value) => setAdpStartRound(value)}
            >
              <Option key="1" value={"1"}>
                1
              </Option>
              <Option key="2" value={"2"}>
                2
              </Option>
              <Option key="3" value={"3"}>
                3
              </Option>
              <Option key="4" value={"4"}>
                4
              </Option>
              <Option key="5" value={"5"}>
                5
              </Option>
              <Option key="6" value={"6"}>
                6
              </Option>
              <Option key="7" value={"7"}>
                7
              </Option>
              <Option key="8" value={"8"}>
                8
              </Option>
              <Option key="9" value={"9"}>
                9
              </Option>
              <Option key="10" value={"10"}>
                10
              </Option>
              <Option key="11" value={"11"}>
                11
              </Option>
              <Option key="12" value={"12"}>
                12
              </Option>
              <Option key="13" value={"13"}>
                13
              </Option>
              <Option key="14" value={"14"}>
                14
              </Option>
              <Option key="15" value={"15"}>
                15
              </Option>
            </StyledSelect>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Pick" name="adpPickStart">
            <StyledSelect
              placeholder="Pick"
              value={adpStartPick}
              defaultValue={adpStartPick}
              onChange={(value) => setAdpStartPick(value)}
            >
              {picks.map((pick) => (
                <Option key={pick} value={pick}>
                  {pick}
                </Option>
              ))}
            </StyledSelect>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Round" name="adpRoundEnd">
            <StyledSelect
              placeholder="Round"
              value={adpEndRound}
              defaultValue={adpEndRound}
              onChange={(value) => setAdpEndRound(value)}
            >
              <Option key="1" value={"1"}>
                1
              </Option>
              <Option key="2" value={"2"}>
                2
              </Option>
              <Option key="3" value={"3"}>
                3
              </Option>
              <Option key="4" value={"4"}>
                4
              </Option>
              <Option key="5" value={"5"}>
                5
              </Option>
              <Option key="6" value={"6"}>
                6
              </Option>
              <Option key="7" value={"7"}>
                7
              </Option>
              <Option key="8" value={"8"}>
                8
              </Option>
              <Option key="9" value={"9"}>
                9
              </Option>
              <Option key="10" value={"10"}>
                10
              </Option>
              <Option key="11" value={"11"}>
                11
              </Option>
              <Option key="12" value={"12"}>
                12
              </Option>
              <Option key="13" value={"13"}>
                13
              </Option>
              <Option key="14" value={"14"}>
                14
              </Option>
              <Option key="15" value={"15"}>
                15
              </Option>
            </StyledSelect>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Pick" name="adpPickEnd">
            <StyledSelect
              placeholder="Pick"
              value={adpEndPick}
              defaultValue={adpEndPick}
              onChange={(value) => setAdpEndPick(value)}
            >
              {picks.map((pick) => (
                <Option key={pick} value={pick}>
                  {pick}
                </Option>
              ))}
            </StyledSelect>
          </Form.Item>
        </Col>
      </StyledRow>
    </Form>
  );
};

export default AppOptions;
