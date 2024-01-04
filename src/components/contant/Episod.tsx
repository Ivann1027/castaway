import '../../styles/episodes.scss'
import { EpisodType } from '../../types/types'

interface IEpisodProps {
	episod: EpisodType
}

const Episod: React.FC<IEpisodProps> = ({episod}) => {

	return (
		<section className='episod'>
			<div className='episod__img'>
				<img src={episod.img} />
			</div>
			<div className='episod__content'>
				<p className='episod__category'>{episod.category}</p>
				<p className='episod__number'>Episod {episod.number}</p>
				<h1 className='episod__title'>{episod.title}</h1>
				<p className='episod__description'>{episod.description}</p>
				<button className='episod__btn' type='button'>View Episode Details</button>
			</div>
		</section>
	)
}

export default Episod