import React from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";

function App(props) {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get("https://086884bb6051ade8.mokky.dev/items").then((res) => {
      setItems(res.data);
    });
    axios.get("https://086884bb6051ade8.mokky.dev/cart").then((res) => {
      setCartItems(res.data);
    });
    axios.get("https://086884bb6051ade8.mokky.dev/favorites").then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://086884bb6051ade8.mokky.dev/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onSaveToFavorite = (obj) => {
    axios
      .post("https://086884bb6051ade8.mokky.dev/cart", obj)
      .then((res) => setCartItems((prev) => [...prev, res.data]));
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://086884bb6051ade8.mokky.dev/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://086884bb6051ade8.mokky.dev/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post(
          "https://086884bb6051ade8.mokky.dev/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
