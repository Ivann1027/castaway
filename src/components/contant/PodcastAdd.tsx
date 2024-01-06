import '../../styles/podcastAdd.scss'
import Services from "./Services"

const PodcastAdd = () => {


	return (
		<section className="podcastAdd">
			<div className="podcastAdd__img">
				<img className='decorate-img' src='/img/ui/threeLines.svg' />
				<img className='main-img' src='/img/podcastAdd.jpg' /> 
			</div>
			<div className="podcastAdd__content">
				<h1 className="podcastAdd__title">Take your <br /> podcast to the <br /> <span>next <img src='/img/ui/underline.png' /></span> <b>level</b></h1>
				<div className="podcastAdd__links">
					<p>Listen on</p>
					<Services />
				</div>
			</div>
		</section>
	)
}

export default PodcastAdd