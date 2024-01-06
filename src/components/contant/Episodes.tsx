import '../../styles/episodes.scss'
import { episodes } from '../../data/episodes'
import Episod from './Episod'
import EpisodeTab from './EpisodeTab'
import { useState } from 'react'

const Episodes = () => {

	const categories = Array.from(new Set(episodes.map(episod => episod.category)))
	const [activeCategory, setActiveCategory] = useState<string>('all')
	const sortedEpisodes = episodes.filter(episode => {
		if (activeCategory === 'all') {
			return episode
		} else {
			if (activeCategory === episode.category) {
				return episode
			}
		}
	})

	const handleChangeCategory = (category: string) => {
		setActiveCategory(category)
	}

	return (
		<section className="episodes">
			<div className='episodes__header'>
				<h1 className='episodes__title'>Latest episodes</h1>
				<div className='episodes__tabs'>
					<p style={{background: activeCategory === 'all' ? 'rgba(17, 141, 168, 1)' : 'rgba(255, 255, 255, 0.2)'}} onClick={() => handleChangeCategory('all')} className='episodes__tab'>View all episodes</p>
					{categories.map(category => (
							<EpisodeTab onClick={() => handleChangeCategory(category)} activeCategory={activeCategory} category={category} key={category} />
					))}
				</div>
			</div>
			<div className='episodes__list'>
				{sortedEpisodes && sortedEpisodes.map(episode => (
					<Episod episode={episode} key={episode.id} />
				))}
			</div>
		</section>
	)
}

export default Episodes