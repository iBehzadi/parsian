$(function () {
    $('.nav-menu-icon').on('click', function (){
        $('.nav-links').toggleClass('show-links')
    })

})

$(function(){
    $('a.scroll-link').on('click',function(event){
        event.preventDefault();
        $('.nav-links').removeClass('show-links');
        let sectionId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionId).offset().top
        }, 1000);
    })
})