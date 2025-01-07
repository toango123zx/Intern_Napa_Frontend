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

    const image = item.querySelector('img');
    image.classList.toggle('img--rotate');
}

const menuHeaderMobile = () => {
    const menu = document.querySelector('.menu--mobile');
    menu.classList.toggle('menu--show');

    const iconMenuRotateFavorable = document.querySelector('#iconMenuRotateFavorable');
    iconMenuRotateFavorable.classList.toggle('block--rotate-favorable');
    const iconMenuRotateReverse = document.querySelector('#iconMenuRotateReverse');
    iconMenuRotateReverse.classList.toggle('block--rotate-reverse');
}