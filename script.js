var msgID = 1;


(function intialDateTime(){
    document.getElementById("dateTime").innerHTML = getDateTime();
})(); //Immediate invoked to get the date time right now

function sendMessage(){
    const userMsg = $('#userInput').val(); //Get user message
    $('#userInput').val(''); //Clear text field
    
    var userMsgID = msgID + 1;
    
    const messageContent = "<div id =" + userMsgID.toString() + 
    " class=\"user\"><p>" + userMsg + "</p><p id= \"dateTime\">" + getDateTime() + "</p></div>";

    var computerMsgID =  "#" + msgID.toString();
    $(messageContent).insertAfter($(computerMsgID));
    msgID++;
}

function getDateTime(){
    const date = new Date();
    const msgDateTime = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + (date.getMinutes()<10? "0": "") + date.getMinutes();
    return msgDateTime.toString();
}