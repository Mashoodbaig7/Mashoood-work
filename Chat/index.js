var list = [];
var div = document.getElementById("messages");

var autoReplies = [
    "Hello",
    "How are you",
    "Your name is mashood",
    "best",
    "good"
];

function handleSend() {
    var msgText = document.getElementById("msg");
    if (msgText.value != "") {
        list.push({ text: msgText.value, admin: false });
        handleDisplay();
    }
    
    msgText.value = "";
    
    setTimeout(() => {
        let getMsgIndex = Math.floor(Math.random() * autoReplies.length);
        list.push({ text: autoReplies[getMsgIndex], admin: true });
        handleDisplay();
    }, 1000);
}

function handleDisplay() {
    div.innerHTML = "";
    for (count = 0; count < list.length; count++) {
        div.innerHTML += `<div class="flex ${list[count].admin ? 'self-start' : 'self-end'}">
            <div class="bg-white inline-block p-2 px-6 rounded-lg border border-black mx-2 mt-2">
                ${list[count].text}
            </div>
        </div>`;
    }
}
