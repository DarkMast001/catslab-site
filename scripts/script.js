const menuIcon = document.getElementById("menu_icon");
const navMenu = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav_link');

const inputEquationMolar = document.querySelector('.input_equation_molar');
const inputEquationBalance = document.querySelector('.input_equation_balance');
const mediaQuery = window.matchMedia('(max-width: 700px)');

menuIcon.addEventListener("click", () => {
	navMenu.classList.toggle("show");
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		navMenu.classList.remove('show');
	});
});

function updatePlaceholder(e) {
	if (e.matches) {
		if (inputEquationBalance != null)
			inputEquationBalance.setAttribute('placeholder', 'H2O = H2 + O2');
		if (inputEquationMolar != null)
			inputEquationMolar.setAttribute('placeholder', 'H2O')
	} else {
		if (inputEquationBalance != null)
			inputEquationBalance.setAttribute('placeholder', 'Введите уравнение. Например, H20 = H2 + O2');
		if (inputEquationMolar != null)
			inputEquationMolar.setAttribute('placeholder', 'Введите соединение. Например, H20')
	}
}
// Обновляем placeholder при загрузке страницы
updatePlaceholder(mediaQuery);
  
// Отслеживаем изменения ширины окна
mediaQuery.addEventListener('change', updatePlaceholder);