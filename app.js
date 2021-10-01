const clock = document.getElementById("clock");
setInterval(function () {
  var date = new Date();
  clock.innerText = date.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}, 1000);