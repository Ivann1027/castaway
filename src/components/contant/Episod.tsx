import '../../styles/episodes.scss'
import { EpisodType } from '../../types/types'

interface IEpisodProps {
	episode: EpisodType
}

const Episod: React.FC<IEpisodProps> = ({episode}) => {

	return (
		<section className='episod'>
			<div className='episod__img'>
				<img src={episode.img} />
			</div>
			<div className='episod__content'>
				<p className='episod__category'>{episode.category}</p>
				<p className='episod__number'>Episod {episode.number}</p>
				<h1 className='episod__title'>{episode.title}</h1>
				<p className='episod__description'>{episode.description}</p>
				<button className='episod__btn' type='button'>View Episode Details</button>
			</div>
		</section>
	)
}

export default Episod