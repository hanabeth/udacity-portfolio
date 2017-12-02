import React from 'react';
import FeaturedCard from './featured-card';
import {FeaturedWorkList} from '../constants/featured-work-constants';
import '../css/featured-work.css';

const FeaturedWork = () => {
	const renderCardList = () => {
		return FeaturedWorkList.map((card) => {
			return (
				<FeaturedCard
					image={card.image}
					title={card.title}
					url={card.url}
			/>
		);
		});
	}

	return (
		<article className="featured-work-section">
			<h3 className="featured-work-label">Featured Work</h3>
			<section className="featured-work-list">
				{renderCardList()}
			</section>
		</article>
	);

};

export default FeaturedWork;