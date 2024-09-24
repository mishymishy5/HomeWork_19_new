$(".myImg").on("click", function() {
    $(".myImg").animate({ width: "500px"});
});


$(".accordian1").on("click", function() {
    // $(".toggleMe").toggle();
    $(".toggleMe1").slideToggle();
});

$(".accordian2").on("click", function() {
    // $(".toggleMe").toggle();
    $(".toggleMe2").slideToggle();
});

$(".accordian3").on("click", function() {
    // $(".toggleMe").toggle();
    $(".toggleMe3").slideToggle();
});

document.querytSelector('.content button').addEventListener('click', function() {
    console.log('Resume download button clicked.');
    window.open("file:///C:/Users/Owner/Documents/UX%20UI/My%20code/HomeWork_19_new/UX%20UI%20RESUME_.pdf");
});

