$(document).ready(function (){

    $('#about-btn').click(function () {
        msgStr = $('#msg').html();
        msgStr = msgStr + ' ooo, fancy!';

        $('#msg').html(msgStr)
    });



    $('.ouch').click(function () {
        alert('You clicked me! Ouch!')
    });

    $('p').hover(
        function () {
            $('#about-btn').css('color', 'red');
        },
        function () {
            $('#about-btn').css('color', 'white');
        });



});