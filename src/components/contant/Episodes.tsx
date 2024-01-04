import '../../styles/episodes.scss'
import { episodes } from '../../data/episodes'
import Episod from './Episod'

const Episodes = () => {

	return (
		<section className="episodes">
			<div className='episodes__header'>
				<h1 className='episodes__title'>Latest episodes</h1>
				<div className='episodes__tabs'>
				</div>
			</div>
			<div className='episodes__list'>
				{episodes.map(episod => (
					<Episod key={episod.id} episod={episod} />
				))}
			</div>
		</section>
	)
}

export default Episodes