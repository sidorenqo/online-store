import React from "react";
import styles from "./Card.module.scss";

function Card({
  id,
  onFavorite,
  title,
  price,
  imageUrl,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  React.useEffect(() => {}, [isAdded]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          alt="img"
          src={isFavorite ? "/img/svg/heart-on.svg" : "/img/svg/heart-off.svg"}
        />
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
