const fs =require('fs');
const path = require('path');
const language = fs.readFileSync(path.join(__dirname, '..', 'languages.txt'), 'utf-8').split(/\n/);
const querystring = require('querystring');


const handlerHome = (request, response) => {
  const url = request.url;
   const filePath = path.join(__dirname, "..", 'public', 'index.html');
    fs.readFile(filePath, (err, file) => {
      if(err) {
        response.writeHead(404, { 'Content-Type': 'text/html'});
        response.end('<h1>Page not found</h1>');
      } else {
        response.writeHead(200, { "Content-Type": 'text/html'});
        response.end(file);
      }
    });
};
const handlerPublic = (request ,response, url) => {
    const extension = url.split('.')[1];
    const extensionTypes = {
      html: 'text/html',
      js: 'application/javascript',
      css: 'text/css',
      png: 'image/png'
    };
    const filePath = path.join(__dirname, '..', url);
    fs.readFile(filePath, (error, file) => {
      if (error){
        console.log(error);
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1>Sooooo Sorry... I can\'t find this file...</h1>')
      } else {
        response.writeHead(200, { 'Content-type': extensionTypes[extension] });
        response.end(file);
      }
    });
  };

/*  const handlerSearch = (request, response, url) => {
    const result = language.filter(el => el[0] ===  'S');
    console.log(result);
  }
  */
  // const handlerSearch = (request, response, url) => {
  //     const result = language.filter(el => el[0] ===  'A')
  //       console.log(result);
  //    const result1 = language.filter(el => el[0] ===  'B')
  //       console.log(result1);
  //
  //   };

  const handlerSearch = (request, response, url) => {
    //const output = [];
    const wordList = language;
    const word1 = language[0].split('');
    console.log(word1);
    const result = word1.filter(el => el === word1[0])
    result.join('');
    console.log(result);
      //if(url === word1[0]){
      word1.join('');
      console.log(word1);
//output.push(word1);
      //}
    }
//
// // const word = wordList.contains(el => {
// //   return this.indexOf(el) > -1;
//   console.log(output);
// //})
// }

  //  for(i = 0; i < wordList.length; i++){
    // const words = wordList[i].split('');
    // const filter = words.filter(el => {
    // if(el[0] === words[0]) {
    //   return output.push(el);
    //   console.log(words);
    // }
  //    return output.slice(0, 2);
//    }
//     })
//   }
// }
//   let search = querystring.parse(url.substring(url.indexOf('/search') + 1)).input;
//   //data = JSON.parse(data);
//   //let searchobj = search[0].toUpperCase();
// //  let results = getWords.getAutoCompleteWords(Object.keys(data[searchobj]),search);
//   response.writeHead(200,  { 'Content-Type': 'text/html' });
//     const urlSearch = request.url;
//     // for(i=0; i<=language.length; i++){
//     // const wordList = language[i];
//     const result = language.filter(el => el ===  search);
//     console.log(result);
//     return result;
//     response.end(JSON.stringify(result));
//
//     const wordSearch = (str)  => {
//    const output = [];
//   if (str === "") {
//     return (output = []);
//   }
//   for (var i = 0, l = language.length; i < l && language.length < 10; i++) {
//     var word = language[i];
//     console.log(word);
//     if (word.indexOf(str) === 0) {
//       language.push(word);
//       console.log(language);
//   return language;
// } else  {
//      response.writeHead(200, { "Content-Type": "languages/txt" });
//      response.end(JSON.stringify(language));
//   }
// }
// }
//
//
// }
module.exports = {
   handlerHome,
   handlerPublic,
   handlerSearch
 }
