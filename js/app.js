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
    Choose = Math.floor(Math.random() * 100) + 1;
}



function Guessing(guess) {
    var guess = document.getElementById("guessList").lastChild.innerHTML;
    console.log(document.getElementById("guessList").lastChild.innerHTML);

    if (Choose === guess) {
        $("h2#feedback").html("You Win!");
     } else if(Math.abs(Choose - guess) < 10 && Math.abs(Choose - guess) > 0){
        $("h2#feedback").html("Hot");
    } else if(Math.abs(Choose - guess) < 20 && Math.abs(Choose - guess) > 9){
        $("h2#feedback").html("Warm");
    } else if(Math.abs(Choose - guess) < 30 && Math.abs(Choose - guess) > 19){
        $("h2#feedback").html("Cold");
    } else if (Math.abs(Choose - guess) < 40 && Math.abs(Choose - guess) > 99) {
        $("h2#feedback").html("Freezing");
    } else {
        $("h2#feedback").html("You Win!");
    }
}
