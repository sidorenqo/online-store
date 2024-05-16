import { Route, Routes } from "react-router-dom";
import Card from '../components/Card';


function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart }) {
	return (
		<div className="content p-40">
			<div className="d-flex justify-between align-center mb-40">
				<h1>
					{searchValue
						? `Поиск по запросу: "${searchValue}"`
						: "Выбери свои кросовки"}
				</h1>
				<div className="search-block">
					<img src="/img/svg/search.svg" alt="remove" />
					{searchValue && (
						<img
							onClick={() => setSearchValue(" ")}
							className="removeBtn cu-p clear"
							src="/img/svg/remove.svg"
							alt="close"
						/>
					)}
					<input
						value={searchValue}
						onChange={onChangeSearchInput}
						placeholder="Поиск..."
					/>
				</div>
			</div>
			<div className="d-flex flex-wrap">
				{items
					.filter((item) =>
						item.title.toLowerCase().includes(searchValue.toLowerCase())
					)
					.map((item) => (
						<Card
							key={item.imageUrl}
							title={item.title}
							price={item.price}
							imageUrl={item.imageUrl}
							onFavorite={(obj) => onAddToFavorite(obj)}
							onPlus={(obj) => onAddToCart(obj)}
						/>
					))}
			</div>
		</div>
	)
}

export default Home;