import styled from "styled-components";
import { MainLayout } from "../components/layout/MainLayout";
import PositionTabs from "../components/PositionTabs";


const StyledHeader = styled.h1`
  ${({ theme }) => `
    font-size: 2em;
    text-align: left;
    padding: ${theme["padding-small"]} ${theme["padding-small"]};
  `}
`;

const Index = () => {
  return (
    <MainLayout title="Fantasy Football Personal Rankings Assistant">
      <PositionTabs />
    </MainLayout>
  );
};

export default Index;
