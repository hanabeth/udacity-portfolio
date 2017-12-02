import React from 'react';
import '../css/featured-card.css';

const FeaturedCard = ({image, title, url}) => {
	//TODO: alt text accessibility review

	return(
		<article className="featured-card">
			<a href={url} class="project-card-clickable" >
				<img src={image} className="featured-card-image" alt="project card" />
				<h4 className="featured-card-title">
					{title}
				</h4>
				<p className="featured-card-url">
					{url}
				</p>
			</a>
		</article>
	);
};

export default FeaturedCard;