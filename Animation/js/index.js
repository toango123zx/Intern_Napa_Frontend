const buttonSwitch = () => {
    const year = document.getElementById('pricingYear');
    const month = document.getElementById('pricingMonth');
    const yearCard = document.getElementById('cardYear');
    const monthCard = document.getElementById('cardMonth');
    year.classList.toggle("text--purple");
    month.classList.toggle("text--purple");
    yearCard.classList.toggle("card--hidden");
    monthCard.classList.toggle("card--hidden");
}

const question = (item) => {
    const description = item.querySelector('.question__text--description');

    // Kiểm tra và bật/tắt display
    if (description.style.display === 'block') {
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }
}