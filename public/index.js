var inputField = document.getElementById("inputlang");
console.log(inputField);
inputField.addEventListener("keyup", function(e) {
  e.preventDefault();
fetch(inputField.value);
});



fetch('/search')
  .then(function(response){
    return response.json();
  })
  .then(function(data) {

console.log(data);
})
  .catch(function(error) {
    console.log(error);
  });


  // var shortresult, input;
  // var final = language.split('\n').filter(function(el){
  //   return el.indexof(input) > -1 ;
  //

// function fetchDataFromServer (userData, callback){
//   var xhr = new XMLHttpRequest();
//   userData = userData.toLowerCase();
//   console.log(userData);
//      xhr.onreadystatechange = function() {
//      if (xhr.readyState === 4 && xhr.staus === 200) {
//        console.log(xhr.responseText);
//        var response = JSON.parse(xhr.responseText);
//        callback(response);
//      }
//    };
//    xhr.open("GET", true);
//    // xhr.send();
//    console.log(xhr);
// }

// function appendDataFromServer(response){
//   var inputLangu = document.getElementById("inputlang");
//   removeChildren(inputLangu);
//   if (response.length === 0 && inputField.value !== "") {
//     var newDiv = document.createElement("div");
//     newDiv.textContent = "Sorry, no results found. Please try another search.";
//     inputLangu.appendChild(newDiv);
//   } else {
//     response.forEach(function(items) {
//       var anchorText = document.createElement("div");
//       anchorText.text = items;
//       console.log(anchorText);
//       inputLangu.appendChild(anchorText);
//       console.log(inputLangu);
//     });
//   }
// }

  // })

  // const fs = require('fs');
  // const language = fs.readFile(__dirname, '..', 'languages.txt');
  //

  // // Function to send a request for data from the server
  // //function fetchDataFromServer
