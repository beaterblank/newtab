const form = document.getElementById('search-form');
form.addEventListener('submit', searchGoogle);
function searchGoogle(event) {
  event.preventDefault(); // Prevents the form from submitting and reloading the page
  
  const searchText = document.getElementsByName('searchText')[0].value;
  const encodedSearchText = encodeURIComponent(searchText);
  const url = `https://www.google.com/search?q=${encodedSearchText}`;
  
  window.location.href = url; // Redirects to the Google search results page
}

function refreshTime() {
    var date = new Date();
    var hh24 = date.getHours();
    var min = date.getMinutes();
    var ss = date.getSeconds();
    var clockString =
      (hh24 < 10 ? "0" : "") +
      hh24 +
      ":" +
      (min < 10 ? "0" : "") +
      min +
      ":" +
      (ss < 10 ? "0" : "") +
      ss;
    document.querySelector("#clock-text").innerHTML = clockString;
  }
  window.addEventListener("load", (event) => {
    refreshTime();
});
  
setInterval(refreshTime, 1000);