import React from "react";

function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between mb-20 ">
          Корзина
          <img
            className="removeBtn cu-p"
            src="/img/svg/remove.svg"
            alt="remove"
          />
        </h2>
        <div className="items flex-1 ">
          <div className="cartItem d-flex mb-20 align-center">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кросовки</p>
              <b>12 999</b>
            </div>
            <img className="removeBtn" src="/img/svg/remove.svg" alt="remove" />
          </div>

          <div className="cartItem d-flex mb-20 align-center ">
            <div
              style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские кросовки</p>
              <b>12 999</b>
            </div>
            <img className="removeBtn" src="/img/svg/remove.svg" alt="remove" />
          </div>
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
    </div>
  );
}

export default Drawer;
