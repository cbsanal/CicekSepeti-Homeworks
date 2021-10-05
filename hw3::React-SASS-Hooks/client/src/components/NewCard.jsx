import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { toastOptions } from "../helpers/toastOptions";
import axios from "axios";
// import axiosInstance from "../config";
import plus from "../icons/plus.svg";
import close from "../icons/close.svg";
import { bodyFixed } from "../helpers/bodyFixed";

const NewCard = ({ fetchDatas, setNewCardModal }) => {
  const [photoURL, setPhotoURL] = useState(null);
  const [title, setTitle] = useState("Empty");
  const [price, setPrice] = useState("0");
  const [explanation, setExplanation] = useState(null);

  const createCard = async (e) => {
    e.preventDefault();
    try {
      await axios(photoURL);
      await axios({
        method: "POST",
        url: "http://localhost:8000/api/card/createCard",
        data: {
          title: title,
          photoURL: photoURL,
          price: price,
          explanation: explanation,
        },
      });
      fetchDatas();
      setNewCardModal(false);
      toast.success("Data added successfully!", {
        toastOptions,
      });
      bodyFixed("unfixed");
    } catch (err) {
      toast.warn("Please enter valid image address", {
        toastOptions,
      });
    }
  };

  useEffect(() => {
    bodyFixed("fixed");
  }, []);

  return (
    <section className="new-item-modal">
      <img
        className="close-icon"
        src={close}
        alt="close-icon"
        onClick={() => {
          setNewCardModal(false);
          bodyFixed("unfixed");
        }}
      />
      <div className="modal-container">
        <div className="preview">
          <p className="preview-title">Preview</p>
          <div className="card-preview">
            <img src={photoURL} alt="please write valid img url in the form" />
            <div className="title-price">
              <div className="title">
                {title === ""
                  ? "Empty"
                  : title.length > 12
                  ? title.substr(0, 10) + "..."
                  : title}
              </div>
              <div className="price">
                {price === ""
                  ? "0"
                  : price.toString().length > 4
                  ? price.toString().substr(0, 2) + "..."
                  : price}
                $
              </div>
            </div>
          </div>
        </div>
        <div className="middle-layer"></div>
        <div className="form-container">
          <form onSubmit={(e) => createCard(e)}>
            <p className="form-title">Form</p>
            <div>
              <label htmlFor="imgURL">Image URL: </label>
              <input
                type="text"
                id="imgURL"
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Please enter image address..."
                required
              />
            </div>
            <div>
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Please enter title..."
                required
              />
            </div>
            <div>
              <label htmlFor="price">Price: </label>
              <input
                type="number"
                id="price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                placeholder="Please enter price..."
                required
              />
            </div>
            <div>
              <label htmlFor="exp">Explanation: </label>
              <input
                type="text"
                id="exp"
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Please enter explanation..."
                required
              />
            </div>
            <div className="btn-wrapper center">
              <button className="item-btn">
                <img src={plus} alt="plus-icon" />
                Add New Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewCard;
