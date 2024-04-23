import React from "react";
import styles from "./Card.module.scss";

function Card({ onFavorite, title, price, imageUrl, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  React.useEffect(() => {}, [isAdded]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/svg/heart-off.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/svg/btn-check.svg" : "/img/svg/plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
