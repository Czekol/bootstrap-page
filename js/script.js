document.addEventListener('DOMContentLoaded', () => {
	const nav = document.querySelector('nav')
	const navLinks = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	const addShadow = () => {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	window.addEventListener('scroll', addShadow)
	navLinks.forEach(a => a.addEventListener('click', () => navList.classList.remove('show')))
})




