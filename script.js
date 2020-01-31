document.addEventListener("DOMContentLoaded", setup);

function setup() {
  document.getElementById("submitBtn").addEventListener("click", addEntry);
  }

function addEntry() {
  console.log("startttt");
  var request = new XMLHttpRequest();
  request.onload = function() {
    alert(request.status);
  }
  
  request.open("GET", "https://fast-plains-27310.herokuapp.com/proxy.php", true);
  request.send();
  console.log("did stuff");
}