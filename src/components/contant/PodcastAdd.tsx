import '../../styles/podcastAdd.scss'
import Services from "./Services"

const PodcastAdd = () => {


	return (
		<section className="podcastAdd">
			<div style={{backgroundImage: 'url(/img/podcastAdd.jpg)'}} className="podcastAdd__img"></div>
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