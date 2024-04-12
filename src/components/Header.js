import React from "react";

function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" />
        <div>
          <h3 className="clear text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кросовок</p>
        </div>
      </div>
      <div>
        <ul className="d-flex ">
          <li className="mr-30">
            <img width={18} height={18} src="/img/svg/cart.svg" />
            <span>0000 рублей</span>
          </li>
          <li className="mr-30">
            <img width={18} height={18} src="/img/svg/favorit.svg" />
          </li>
          <li>
            <img width={18} height={18} src="/img/svg/user.svg" alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;