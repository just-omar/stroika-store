import styled from "styled-components";
import special from "./assets/special.jpg";
import Header from "./components/Header";

const Container = styled.div`
  max-width: calc(1440px - 2 * 140px);
  margin: 0 auto;
  border: 1px solid black;

  .special_img {
    margin: 0 -100px;
  }
`;
function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <img className="special_img" src={special} alt="" />
      </Container>
    </div>
  );
}

export default App;
