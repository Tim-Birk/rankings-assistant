import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";
import { PrinterFilled, CopyFilled } from "@ant-design/icons";
import PrintableCheatSheet from "./PrintableCheatSheet";
import ViewableCheatSheet from "./ViewableCheatSheet";

const StyledPrintButton = styled.span`
  ${({ theme }) => `
        cursor: pointer;
        color: #FFF;
        font-size: 1em;
        &:hover {
            text-shadow: 1px 2px 3px #666;
        }
    `}
`;

const StyledCopyButton = styled.span`
  ${({ theme }) => `
        cursor: pointer;
        color: #FFF;
        font-size: 1em;
        margin-left: ${theme["padding-medium"]};
        &:hover {
            text-shadow: 1px 2px 3px #666;
        }
    `}
`;

const StyledCopiedMessage = styled.span`
  ${({ theme }) => `
        color: lightblue;
        font-weight: bold;
        font-size: 0.75em;
        text-shadow: 1px 2px 3px #666;
        margin-left: ${theme["margin-xsmall"]};
    `}
`;

const CheatSheet = ({ qbRanks, rbRanks, wrRanks, teRanks }) => {
  const [hidden, setHidden] = useState(true);
  const componentRef = useRef();

  useEffect(() => {
    console.log(componentRef.current);
  }, [componentRef]);

  const handleCopy = () => {
    let textToCopy = `Fantasy Rankings Assistant
    
    QB Rankings:
        `;
    qbRanks.forEach((r, i) => {
      textToCopy =
        textToCopy +
        `${i + 1}. ${r.name}
        `;
    });

    textToCopy =
      textToCopy +
      `
    RB Rankings:
        `;
    rbRanks.forEach((r, i) => {
      textToCopy =
        textToCopy +
        `${i + 1}. ${r.name}
        `;
    });

    textToCopy =
      textToCopy +
      `
    WR Rankings:
        `;
    wrRanks.forEach((r, i) => {
      textToCopy =
        textToCopy +
        `${i + 1}. ${r.name}
        `;
    });

    textToCopy =
      textToCopy +
      `
    TE Rankings:
        `;
    teRanks.forEach((r, i) => {
      textToCopy =
        textToCopy +
        `${i + 1}. ${r.name}
        `;
    });

    navigator.clipboard.writeText(textToCopy);
    setHidden(!hidden);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <StyledPrintButton onClick={handlePrint}>
        <PrinterFilled /> Print
      </StyledPrintButton>
      <StyledCopyButton onClick={handleCopy}>
        <CopyFilled /> Copy to Clipboard
      </StyledCopyButton>
      <StyledCopiedMessage
        style={hidden ? { display: "none" } : { display: "inline" }}
        onClick={handleCopy}
      >
        Copied!
      </StyledCopiedMessage>

      <div style={{ display: "none" }}>
        <PrintableCheatSheet
          ref={componentRef}
          qbRanks={qbRanks}
          rbRanks={rbRanks}
          wrRanks={wrRanks}
          teRanks={teRanks}
        />
      </div>
      <div style={{ display: "none" }}>
        <textarea></textarea>
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
