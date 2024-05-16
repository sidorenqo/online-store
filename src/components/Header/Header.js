import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="clear text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>
        </div>
      </Link>

      <div>
        <ul onClick={props.onClickCart} className="d-flex cu-p">
          <li className="mr-30">
            <img width={18} height={18} src="/img/svg/cart.svg" alt="Корзина" />
            <span>0000 рублей</span>
          </li>
          <li className="mr-30 cu-p">
            <Link to="/favorites">
              <img
                width={18}
                height={18}
                src="/img/svg/favorite.svg"
                alt="Закладки"
              />
            </Link>
            <span>Закладки</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/svg/user.svg" alt="Профиль" />
            <span>Профиль</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
