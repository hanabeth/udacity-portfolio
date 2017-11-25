import React, {Component} from 'react';
import Header from './components/header';
import FeaturedWork from './components/featured-work';
import './css/portfolio.css';

class Portfolio extends Component {
	render() {
		return (
			<div className="porfolio-wrapper">
				<Header
					name="Hana Johnson"
					position="Software Developer"
				/>
				<span className="section-border" />
					<section className="main-image-wrapper">
						<img src="https://avatars3.githubusercontent.com/u/8824449?s=460&v=4"
						className="main-image" 
						alt=""
						/>
					</section>
					<section className="featured-work-wrapper">
						<FeaturedWork>
							
						</FeaturedWork>
					</section>
			</div>
		);
	}
}

export default Portfolio;