import delivery from "../icons/delivery.svg";
import search from "../icons/search-icon.svg";
import plus from "../icons/plus.svg";

const Header = ({ setNewCardModal, setSearchValue }) => {
  return (
    <header>
      <div className="logo-wrapper">
        <img className="logo" src={delivery} alt="logo-img" />
        <div className="logo-title">IDon'tNeedIt.com</div>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search.."
          className="search-input"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img src={search} alt="search-icon" />
      </div>
      <div className="btn-wrapper">
        <button className="item-btn" onClick={() => setNewCardModal(true)}>
          <img src={plus} alt="plus-icon" />
          Add new item
        </button>
      </div>
    </header>
  );
};

export default Header;
