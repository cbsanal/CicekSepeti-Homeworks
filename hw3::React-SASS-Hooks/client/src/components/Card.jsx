import deleteIcon from "../icons/delete.svg";
import updateIcon from "../icons/update.svg";
import eyeIcon from "../icons/eye.svg";
import { toast } from "react-toastify";
// import axiosInstance from "../config";
import axios from "axios";
import { toastOptions } from "../helpers/toastOptions";

const Card = (props) => {
  const deleteCard = async (id) => {
    try {
      await axios({
        method: "DELETE",
        url: `http://localhost:8000/api/card/deleteCard/${id}`,
      });
      toast.success("Data deleted successfully!", { toastOptions });
      props.fetchDatas();
    } catch (err) {
      toast.error("Error occured, please try again.", {
        toastOptions,
      });
    }
  };

  return (
    <>
      <div className="update-delete-details">
        <div
          className="icon-container"
          onClick={() => {
            deleteCard(props.id);
          }}
        >
          <img src={deleteIcon} alt="delete-icon" />
        </div>
        <div
          className="icon-container"
          onClick={() => {
            props.setCardDetailsModal(true);
            props.setCurrentCardId(props.id);
          }}
        >
          <img src={eyeIcon} alt="details-icon" />
        </div>
        <div
          className="icon-container"
          onClick={() => {
            props.setCardUpdateModal(true);
            props.setCurrentCardId(props.id);
          }}
        >
          <img src={updateIcon} alt="update-icon" />
        </div>
      </div>
      <img src={props.imgURL} alt="img" />
      <div className="title-price">
        <div className="title">
          {props.title.length > 12
            ? props.title.substr(0, 10) + "..."
            : props.title}
        </div>
        <div className="price">
          {props.price.toString().length > 4
            ? props.price.toString().substr(0, 2) + "..."
            : props.price}
          $
        </div>
      </div>
    </>
  );
};

export default Card;
