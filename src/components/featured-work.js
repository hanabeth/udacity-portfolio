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
		<section className="featured-work-section">
			<label className="featured-work-label">Featured Work</label>
			<div className="featured-work-list">
				{renderCardList()}	
			</div>
		</section>
	);

};

export default FeaturedWork;