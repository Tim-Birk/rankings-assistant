import { ThemeProvider } from "styled-components";
import { Component, ReactNode } from "react";
import { theme } from "../../utils/theme";
import { GlobalStyle } from "../../utils/globalStyle";
import MainHead from "../layout/MainHead";
import { Layout } from "antd";
import { MainNavbar } from "./MainNavbar"; 
import styled from "styled-components"

const { Content } = Layout;

type Props = {
  children: ReactNode;
  title?: string;
};

const StyledLayout = styled(Layout)`
  background-color: transparent;
  
`

export class MainLayout extends Component<Props> {
  render() {
    const { title, children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MainHead title={title} />
        <GlobalStyle />
        <StyledLayout>
          <MainNavbar />
          <Content>{children}</Content>
        </StyledLayout>
      </ThemeProvider>
    );
  }
}
