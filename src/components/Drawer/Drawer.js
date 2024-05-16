import React from "react";

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between mb-20 ">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/svg/remove.svg"
            alt="close"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex mb-20 align-center">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/svg/remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>НДС 5%: </span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img src="/img/svg/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/cart/cart.jpg"
              alt="cart"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Чтобы сделать заказ, добавьте кросовки</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/cart/arrow.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        )}

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex mb-20 align-center">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                onClick={() => onRemove(obj.id)}
                className="removeBtn"
                src="/img/svg/remove.svg"
                alt="remove"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
