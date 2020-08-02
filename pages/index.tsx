import styled from "styled-components";
import { MainLayout } from '../components/layout/MainLayout';

const StyledHeader = styled.h1`
  ${({ theme }) => `
    font-size: 2em;
    text-align: left;
    padding: ${theme['padding-small']} ${theme['padding-small']};
  `}
`;

const Index = () => {
  return (
    <MainLayout title="Fantasy Football Personal Rankings Assistant">
      <StyledHeader>Don't be a slave to someone else's rankings at your draft</StyledHeader>
    </MainLayout>
  );
};

export default Index;
