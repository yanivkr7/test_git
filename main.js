const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');
const menuItem = document.querySelectorAll('.menu-item');
menuBtn.addEventListener('click', () => {
	toggleMenu();
});

menuItem.forEach((item) => {
	item.addEventListener('click', (event) => {
		if (menuBtn.classList.contains('open')) {
			toggleMenu();
		}
	});
});

function toggleMenu() {
	menuBtn.classList.toggle('open');
	menuItems.classList.toggle('open');
}
