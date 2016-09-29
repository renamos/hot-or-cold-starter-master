$(document).ready(function () {
    // var newNumber = Math.floor((Math.random() * 100) + 1);
    var newNumber
    function getNumber() {
        newNumber = Math.floor((Math.random() * 100) + 1)
    }
    
    getNumber();
    
    console.log(newNumber)
    var checkNumber = function (num) {
        //Check if it's a number
        if (Number.isNaN(parseInt(num))) {
            alert('Your guess cannot contain letters!')
            return false
        }
        //Check if it's between 1-100
        if (num > 100 || num < 1) {
            alert('Please enter a number between 1-100!')
            return false
        }
        return true
    }
    var count = 0
        /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);
    });
    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });
    $('.game form').submit(function (e) {
        e.preventDefault();
        var guess = $('#userGuess').val();
        console.log(guess);
        $('#userGuess').val('');
        if (checkNumber(guess) == true) {
            $('#guessList').append('<li>' + guess + '</li>');
            count++;
            $('#count').html(count);
            var absDifference = Math.abs(guess - newNumber);
            switch (true) {
            case (absDifference == 0):
                $('#feedback').html("You got it!");
                break;
            case (absDifference < 5):
                $('#feedback').html("Very Hot!");
                break;
            case (absDifference > 4 && absDifference < 15):
                $('#feedback').html("Hot!");
                break;
            case (absDifference > 15 && absDifference < 30):
                $('#feedback').html("Cold!");
                break;
            case (absDifference > 29 && absDifference < 50):
                $('#feedback').html("Very cold!");
                break;
            case (absDifference > 50):
                $('#feedback').html("Very, VERY cold!");
                break;
            default:
                alert("none");
                break;
            }
        }
    })
    $(".new").click(function () {
        $("#userGuess").val('');
        $('#guessList').empty();
        $('#count').html('0');
        $('#feedback').html("Make your guess!");
        count = 0;
        getNumber();
        console.log(newNumber)
    });
});
//New game
//
////if Value close to random number, html to hot etc.
////if val is not close to random number, html to cold etc.