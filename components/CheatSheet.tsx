import React, { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";
import { PrinterFilled } from "@ant-design/icons";
import PrintableCheatSheet from "./PrintableCheatSheet";
import ViewableCheatSheet from "./ViewableCheatSheet";

const StyledPrintButton = styled.span`
  ${({ theme }) => `
        cursor: pointer;
        color: #FFF;
        font-size: 1.25em;
        &:hover {
            text-shadow: 1px 2px 3px #666;
        }
    `}
`;

const CheatSheet = ({ qbRanks, rbRanks, wrRanks, teRanks }) => {
  const componentRef = useRef();

  useEffect(() => {
    console.log(componentRef.current);
  }, [componentRef]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <StyledPrintButton onClick={handlePrint}>
        <PrinterFilled /> Print
      </StyledPrintButton>

      <div style={{ display: "none" }}>
        <PrintableCheatSheet
          ref={componentRef}
          qbRanks={qbRanks}
          rbRanks={rbRanks}
          wrRanks={wrRanks}
          teRanks={teRanks}
        />
      </div>
      <ViewableCheatSheet
        qbRanks={qbRanks}
        rbRanks={rbRanks}
        wrRanks={wrRanks}
        teRanks={teRanks}
      />
    </div>
  );
};

export default CheatSheet;
