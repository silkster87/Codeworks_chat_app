function sendMessage(){
    var userMsg = $('#userInput').val();
    $('h2').text(userMsg);
    $('#userInput').val('');
}