import { useState, useEffect, useRef } from "react";
import axiosInstance from "../config";
import axios from "axios";
import close from "../icons/close.svg";
import { toast } from "react-toastify";
import { toastOptions } from "../helpers/toastOptions";
import { bodyFixed } from "../helpers/bodyFixed";

const CardUpdate = ({ setCardUpdateModal, currentCardId, fetchDatas }) => {
  const [data, setData] = useState(null);
  const photoURL = useRef(null);
  const title = useRef(null);
  const price = useRef(null);
  const explanation = useRef(null);

  const updateItem = async (e) => {
    e.preventDefault(e);
    try {
      await axios(photoURL.current.value);
      await axiosInstance({
        method: "PATCH",
        url: `/updateCard/${currentCardId}`,
        data: {
          photoURL: photoURL.current.value,
          title: title.current.value,
          price: price.current.value,
          explanation: explanation.current.value,
        },
      });
      toast.success("Data updated successfully!", { toastOptions });
      fetchDatas();
      setCardUpdateModal(false);
      bodyFixed("unfixed");
    } catch (err) {
      toast.warn("Please enter valid image address", { toastOptions });
    }
  };

  useEffect(() => {
    const getCardInfo = async () => {
      const res = await axiosInstance(`/oneCard/${currentCardId}`);
      setData(res.data.card[0]);
    };
    getCardInfo();
    bodyFixed("fixed");
  }, [currentCardId]);
  return (
    <section className="item-update-modal">
      <img
        className="close-icon"
        src={close}
        alt="close-icon"
        onClick={() => {
          setCardUpdateModal(false);
          bodyFixed("unfixed");
        }}
      />
      {data && (
        <div className="item-container">
          <div className="title">Item Update</div>
          <form onSubmit={(e) => updateItem(e)}>
            <div>
              <label htmlFor="imgUrl">İmage URL: </label>
              <input
                type="text"
                defaultValue={data.photoURL}
                ref={photoURL}
                required
              />
            </div>
            <div>
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                defaultValue={data.title}
                ref={title}
                required
              />
            </div>
            <div>
              <label htmlFor="price">Price: </label>
              <input
                type="text"
                defaultValue={data.price}
                ref={price}
                required
              />
            </div>
            <div>
              <label htmlFor="explanation">Explanation: </label>
              <textarea
                defaultValue={data.explanation}
                id="explanation"
                cols="30"
                rows="5"
                ref={explanation}
                required
              ></textarea>
            </div>
            <div className="btn-wrapper">
              <button className="item-btn update-btn">Update the item</button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default CardUpdate;
