var msgID = 1;

document.getElementById("dateTime").innerHTML = getDateTime();

document.getElementById("userInput").addEventListener("keyup", (event)=>{
        if(event.key === "Enter")
        sendMessage();
});

function sendMessage(){
    const userMsg = $('#userInput').val(); //Get user message
    $('#userInput').val(''); //Clear text field
    
    msgID++;
    
    const messageContent = "<div id =" + msgID.toString() + 
    " class=\"user\"><p>" + userMsg + "</p><p id= \"dateTime\">" + getDateTime() + "</p></div>";

    var previousMsgID = msgID - 1;
    var computerMsgID =  "#" + previousMsgID.toString();
    $(messageContent).insertAfter($(computerMsgID));
    scrollToBottom();
    setTimeout(generateRandomMsg, 3000);
}

function getDateTime(){
    const date = new Date();
    const msgDateTime = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + (date.getMinutes()<10? "0": "") + date.getMinutes();
    return msgDateTime.toString();
}

function generateRandomMsg(){
    var messages = ["Great to hear!", "How's the weather?", "What are you up to?", "Where do you live?", "Where do you work?"];

    var randNo = Math.floor(Math.random()*5); //Random int from 0-4

    var message = messages[randNo];

    msgID++;
    const messageContent = "<div id =" + msgID.toString() + 
    " class=\"computer\"><p>" + message + "</p><p id= \"dateTime\">" + getDateTime() + "</p></div>";

    var previousMsgID = msgID -1;
    var userMsgID = "#" + previousMsgID.toString();
    $(messageContent).insertAfter($(userMsgID));
    scrollToBottom();
}

//https://stackoverflow.com/questions/270612/scroll-to-bottom-of-div 
function scrollToBottom(){
    var container = document.getElementById("overFlowContainer");
    container.scrollTop = container.scrollHeight;
}