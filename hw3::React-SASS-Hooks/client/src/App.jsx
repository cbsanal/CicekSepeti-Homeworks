import { useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.scss";

function App() {
  const [newCardModal, setNewCardModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <ToastContainer />
      <Header
        setNewCardModal={setNewCardModal}
        setSearchValue={setSearchValue}
      />
      <CardContainer
        newCardModal={newCardModal}
        setNewCardModal={setNewCardModal}
        searchValue={searchValue}
      />
    </>
  );
}

export default App;
