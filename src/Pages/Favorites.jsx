
import Card from '../components/Card';


function Favorites({ items, onAddFavorite }) {
	return (
		<div className="content p-40">
			<div className="d-flex justify-between align-center mb-40">
				<h1> Мои закладки
				</h1>
			</div>
			<div className="d-flex flex-wrap">
				{items
					.map((item) => (
						<Card
							key={item.imageUrl}
							favorited={true}
							onAddFavorite={onAddFavorite}
							{...item}
						/>
					))}
			</div>
		</div>
	)
}

export default Favorites;