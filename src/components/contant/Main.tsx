import '../../styles/main.scss'
import PodcastAdd from './PodcastAdd'
import Episodes from './Episodes'
import Slidebar from './Slidebar'

const Main = () => {


	return (
		<section className="main wrapper">
			<PodcastAdd />
			<Episodes />
			<Slidebar />
		</section>
	)
}

export default Main