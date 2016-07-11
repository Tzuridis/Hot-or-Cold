$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    // New Game
    $('a.new').click(function() {
        $('#count').html(0);
        $('.text').empty();
        $('.guessBox').empty();
    });

    $('form').submit(function() {
        event.preventDefault();
        var guess = $('.text').val();
        $('.guessBox').append('<li>' + guess + '</li>');
        $('.text').val('');
        if (isNaN(guess)) {
            alert('Unable to comply, please enter a valid number')
     		$('.guessBox').empty();       
        }
       var $counter = $('#count');
       $counter.html((parseInt($counter.html(), 10) || 0) + 1);

    })


});

// Game Mechanics

function Game(guess) {

}