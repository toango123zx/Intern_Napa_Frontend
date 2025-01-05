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
    description.classList.toggle('question--show');
}