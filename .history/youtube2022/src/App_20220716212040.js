import styled from "styled-components";
import Menu from "./components/Menu";
import Navabr from "./components/Navabr";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Signin from "./pages/Signin";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkMode, setdarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setdarkMode={setdarkMode} />
          {/* Main */}
          <Main>
            <Navabr />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trends" element={<Home type="trent" />} />
                <Route path="/subscriptions" element={<Home type="sub" />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/video/:id" element={<Video />} />
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;