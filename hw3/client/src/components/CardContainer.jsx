import axiosInstance from "../config";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Card from "./Card";
import NewCard from "./NewCard";
import CardDetails from "./CardDetails";
import CardUpdate from "./CardUpdate";
const CardContainer = ({ newCardModal, setNewCardModal }) => {
  const [datas, setDatas] = useState([]);
  const [cardDetailsModal, setCardDetailsModal] = useState(false);
  const [currentCardId, setCurrentCardId] = useState(null);
  const [cardUpdateModal, setCardUpdateModal] = useState(false);

  const fetchDatas = async () => {
    try {
      const cards = await axiosInstance("/allCards");
      setDatas(cards.data.allCards);
    } catch (err) {
      toast.error("Error occured, please try again", {
        className: "toast",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  useEffect(() => {
    fetchDatas();
  }, []);
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
