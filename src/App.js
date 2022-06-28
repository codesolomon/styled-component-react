import { Container } from "../src/components/styles/Container.styled";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global";
import Content from "./content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#ebfbff",
    footer: "darkgreen",
  },

  mobile: "768px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          {Content.map((item, index) => {
            return <Card key={index} item={item}></Card>;
          })}
        </Container>

        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
