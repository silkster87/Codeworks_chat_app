var msgID = 1;

function sendMessage(){
    var userMsg = $('#userInput').val(); //Get user message
    $('#userInput').val(''); //Clear text field
    
    var userMsgID = msgID + 1;
    var messageContent = "<div id =" + userMsgID.toString() + 
    " class=\"computer\"><p>" + userMsg + "</p><p id= " + userMsgID.toString() + ">12/10/21 17:09</p></div>";

    var computerMsgID =  "#" + msgID.toString();
    $(messageContent).insertAfter($(computerMsgID));
    msgID++;
}