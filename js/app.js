
$(document).ready(function() {
    Random();
    console.log(Choose)
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
        Random();
        console.log(Choose)
    });

    $('form').submit(function() {
        25
        event.preventDefault();
        var guess = $('.text').val();
        $('.guessBox').append('<li>' + guess + '</li>');
        $('.text').val('');
        if (isNaN(guess)) {
            alert('Unable to comply, please enter a valid number')
            $('.guessBox').empty();
            $('#count').empty();
            $('#count').html(-1);
        }
        Guessing(guess);
        var $counter = $('#count');
        $counter.html((parseInt($counter.html(), 10) || 0) + 1);

    })


});

// Game Mechanics

function Random() {
    Choose = Math.floor(Math.random()*100)+1;
}


function Guessing(guess) {
var guess =  $(".guessBox:last-child")
    if (guess === Choose) {
       $("h2#feedback").html("You win!")
    } 
}

