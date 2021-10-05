import { useState, useEffect } from "react";
import close from "../icons/close.svg";
//import axiosInstance from "../config";
import axios from "axios";
import { bodyFixed } from "../helpers/bodyFixed";

const CardDetails = ({ setCardDetailsModal, currentCardId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getCardInfo = async () => {
      const res = await axios.get(
        `http://localhost:8000/api/card/oneCard/${currentCardId}`
      );
      setData(res.data.card[0]);
    };
    getCardInfo();
    bodyFixed("fixed");
  }, [currentCardId]);
  return (
    <section className="item-details-modal">
      <img
        className="close-icon"
        src={close}
        alt="close-icon"
        onClick={() => {
          setCardDetailsModal(false);
          bodyFixed("unfixed");
        }}
      />
      {data && (
        <div className="item-container">
          <div className="title">Item Details</div>
          <div className="image-details-container">
            <div className="img-container">
              <img src={data.photoURL} alt="product-img" />
            </div>
            <div className="details">
              <p>Title: {data.title}</p>
              <p>Price: {data.price}$</p>
              <p>Explanation: {data.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardDetails;
