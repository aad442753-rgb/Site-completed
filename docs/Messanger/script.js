// Находим все кнопки "See more"
const moreButtons = document.querySelectorAll('.More1, .More2, .More3');

// Цель скролла
const target = document.getElementById('moreContent');

// Добавляем обработчик клика на каждую кнопку
moreButtons.forEach(button => {
    button.addEventListener('click', () => {
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
