import "./App.css";
import { Hero, Header, Container } from "./components/Containers";
// import { Form } from "./components/Form";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { Navbar } from "./components/Navbar";
import { ProductContainer } from "./components/ProductCotainer";

function App() {
  return (
    <>
      <Hero breakpoint="2xl" padding="" background="">
        <Header>
          <Navbar />
        </Header>
        <Main />
      </Hero>
      <ProductContainer />
    </>
  );
}

export default App;
