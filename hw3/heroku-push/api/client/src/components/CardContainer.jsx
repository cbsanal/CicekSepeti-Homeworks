import axiosInstance from "../config";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { toastOptions } from "../helpers/toastOptions";
import Card from "./Card";
import NewCard from "./NewCard";
import CardDetails from "./CardDetails";
import CardUpdate from "./CardUpdate";

const CardContainer = ({ newCardModal, setNewCardModal, searchValue }) => {
  const [datas, setDatas] = useState([]);
  const [cardDetailsModal, setCardDetailsModal] = useState(false);
  const [currentCardId, setCurrentCardId] = useState(null);
  const [cardUpdateModal, setCardUpdateModal] = useState(false);
  const [originalData, setOriginalData] = useState([]);

  const fetchDatas = async () => {
    try {
      const cards = await axiosInstance("/allCards");
      const cardsArray = cards.data.allCards;
      setDatas(cardsArray);
      setOriginalData(cardsArray);
    } catch (err) {
      toast.error("Error occured, please try again", {
        toastOptions,
      });
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  useEffect(() => {
    const filteredData = originalData.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setDatas(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <section className="card-container">
      {newCardModal && (
        <NewCard fetchDatas={fetchDatas} setNewCardModal={setNewCardModal} />
      )}
      {cardDetailsModal && (
        <CardDetails
          setCardDetailsModal={setCardDetailsModal}
          currentCardId={currentCardId}
        />
      )}
      {cardUpdateModal && (
        <CardUpdate
          setCardUpdateModal={setCardUpdateModal}
          currentCardId={currentCardId}
          fetchDatas={fetchDatas}
        />
      )}
      {datas.map((data) => (
        <div key={data._id} className="card">
          <Card
            id={data._id}
            imgURL={data.photoURL}
            title={data.title}
            price={data.price}
            fetchDatas={fetchDatas}
            setCardDetailsModal={setCardDetailsModal}
            setCurrentCardId={setCurrentCardId}
            setCardUpdateModal={setCardUpdateModal}
          />
        </div>
      ))}
    </section>
  );
};

export default CardContainer;
