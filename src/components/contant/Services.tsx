import '../../styles/services.scss'

const Services = () => {


	return (
		<section className="services">
			<ul>
				<li className="services__item">
					<a href='#'>
						<img src='/img/icons/spotify.png' alt='spotify' />
					</a>
				</li>
				<li className="services__item">
				<a href='#'>
						<img src='/img/icons/pocketcasts.png' alt='' />
					</a>
				</li>
				<li className="services__item">
				<a href='#'>
						<img src='/img/icons/soundcloud.png' alt='' />
					</a>
				</li>
				<li className="services__item">
				<a href='#'>
						<img src='/img/icons/apple.png' alt='' />
					</a>
				</li>
				<li className="services__item">
				<a href='#'>
						<img src='/img/icons/overcast.png' alt='' />
					</a>
				</li>
			</ul>
		</section>
	)
}

export default Services