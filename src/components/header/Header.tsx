import '../../styles/header.scss'

const Header = () => {


	return (
		<section className="header">
			<div className='wrapper'>
				<div className="header__row">
					<h1 className='header__title'>Castaway</h1>
					<nav className='header__navbar'>
						<ul>
							<li>Home</li>
							<li>Episodes</li>
							<li>About</li>
							<li>Contact</li>
						</ul>
					</nav>
				</div>
			</div>
		</section>
	)
}

export default Header