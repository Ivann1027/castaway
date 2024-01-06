import '../../styles/slidebar.scss'
import Carusel from './Carusel'

const Slidebar = () => {

	return (
		<Carusel>
			<div className="slidebar__item"><img src='/img/slidebar/slide_1.jpg' /></div>
			<div className="slidebar__item"><img src='/img/slidebar/slide_1.jpg' /></div>
			<div className="slidebar__item"><img src='/img/slidebar/slide_1.jpg' /></div>
			<div className="slidebar__item"><img src='/img/slidebar/slide_1.jpg' /></div>
		</Carusel>
	)
}

export default Slidebar