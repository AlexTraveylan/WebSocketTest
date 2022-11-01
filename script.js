

//http://localhost/WebSocketTest/serveur.php?demande=1



function getMessages() {
  fetch("http://localhost/WebSocketTest/serveur.php?demande=1")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
      let datas = [];
      let str = "";
      for (msg of value) {
          datas.push(msg['message']);
      }
      console.log(datas);
      for (data of datas){
          str = str + "</br>" + data;
      }
      document.getElementById("messages").innerHTML = str;
      
    })
    .catch(function(err) {
      // Une erreur est survenue
    });
}

setInterval(getMessages, 2000);

