import React from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import contentData from "./Content";
import Footer from "./components/Footer";
import Card from "./components/Card";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {contentData.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
