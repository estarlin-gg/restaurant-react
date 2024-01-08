import { useState } from "react";
import "./App.css";
import { Hero, Header, Container } from "./components/Containers";
// import { Form } from "./components/Form";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { Navbar } from "./components/Navbar";
import { ProductContainer } from "./components/ProductCotainer";

function App() {
  const [data, setData] = useState({});
  console.log(data);
  const Recoger = (e) => {
    setData(e);
  };
  return (
    <>
      <Hero   background="">
        <Header>
          <Navbar list={data} />
        </Header>
        <Main />
      </Hero>
      <ProductContainer information={Recoger} />
    </>
  );
}

export default App;
