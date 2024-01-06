import { useState, useEffect, Children, cloneElement, ReactNode } from 'react'
import '../../styles/slidebar.scss'

interface ICaruselProps {
	children: ReactNode
}

const Carusel: React.FC<ICaruselProps> = ({children}) => {

	const [offset, setOffset] = useState<number>(0)
	let slidebar: HTMLElement
	let photos: number
	let slidebarWidth: number
	const [maxOffset, setMaxOffset] = useState<number>(1)
	
	useEffect(() => {
		slidebar = document.getElementById('slidebar') as HTMLElement
		photos = slidebar.children.length - 1
		slidebarWidth = slidebar.offsetWidth
		setMaxOffset(-(photos * slidebarWidth))
	}, [offset, maxOffset])

	const swipeLeft = () => {
		setOffset(prev => Math.min(prev + slidebarWidth, 0))
	}
	const swipeRight = () => {
		setOffset(prev => Math.max(prev - slidebarWidth, maxOffset))
		console.log(maxOffset, slidebar)
	}

	return (
		<section className="slidebar">
			{offset !== 0 && <button className='slidebar__prev' onClick={swipeLeft} type='button'><img src='/img/ui/prev.svg' /></button>}
			<div className="slidebar__window">
				<div style={{transform: `translateX(${offset}px)`}} className="slidebar__items" id='slidebar'>
					{children}
				</div>
			</div>
			{offset !== maxOffset && <button className='slidebar__next' onClick={swipeRight} type='button'><img src='/img/ui/next.svg' /></button>}
		</section>
	)
}

export default Carusel