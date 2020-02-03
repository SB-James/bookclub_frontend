document.addEventListener("DOMContentLoaded", setup);

function setup() {
  document.getElementById("submitBtn").addEventListener("click", addEntry);
  }

function addEntry() {
  console.log("startttt");
  var request = new XMLHttpRequest();
  request.onload = function() {
    alert(request.responseText);
  }
  
  request.open("GET", "proxy.php", true);
  request.send();
}