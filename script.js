

//http://localhost/WebSocketTest/serveur.php?demande=1

let datas = [];

function getMessages() {
fetch("http://localhost/WebSocketTest/serveur.php?demande=1")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    for (msg of value) {
        datas.push(msg['message']);
    }
    let str = "";
    for (data of datas){
        str = str + "</br>" + data;
    }
    document.getElementById("messages").innerHTML = str;
    
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}

setInterval(getMessages, 500);

