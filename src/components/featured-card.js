import React from 'react';
import '../css/featured-card.css';

const FeaturedCard = ({image, title, url}) => {
	//alt text accessibility review

	return(
		<section className="featured-card">
			<img
				src={image}
				className="featured-card-image"
				alt=""
			/>
			<header className="featured-card-title">
				{title}
			</header>
			<a href={url} className="featured-card-url">
				{url}
			</a>
		</section>
	);
};

export default FeaturedCard;