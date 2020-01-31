document.addEventListener("DOMContentLoaded", setup);

function setup() {
  document.getElementById("submitBtn").addEventListener("click", addEntry);
  }

function addEntry() {
  console.log("startttt");
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    alert(request.status);
  }
  
  request.open("GET", "proxy.php");
  request.send();
  console.log("did stuff");
}