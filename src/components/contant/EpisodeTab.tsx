import '../../styles/episodes.scss'

interface ITabProps {
	category: string
	onClick: () => void
	activeCategory: string
}

const EpisodeTab: React.FC<ITabProps> = ({category, onClick, activeCategory}) => {


	return (
		<p className='episodes__tab' onClick={onClick} style={{background: activeCategory === category ? 'rgba(17, 141, 168, 1)' : 'rgba(255, 255, 255, 0.2)'}}>
			{category}
		</p>
	)
}

export default EpisodeTab