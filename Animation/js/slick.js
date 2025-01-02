// $(document).ready(function () {
//     $('.your-class').slick({
//         setting- name: setting - value
//     });
//   });

$(document).ready(function () {
    $('.single-item').slick();
});
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
});