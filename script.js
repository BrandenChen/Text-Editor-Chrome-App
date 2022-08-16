chrome.storage.sync.get({
  keywordsArray: []
}, function(items) {
  replacePageWords(items.keywordsArray);
});
function replacePageWords(keywordsArray){
  for (var i = 0; i < keywordsArray.length; i++) {
    replaceWord(keywordsArray[i]);
  }
}
function replaceWord(obj){

  var allElements = document.querySelectorAll('h1, h2, h3, h4, h5, p, a, caption, span, td');
  for (var i = 0; i < allElements.length; i++) {
    if(allElements[i].innerText.toLowerCase().includes(obj.keyword.toLowerCase())){
      if(obj.type == '0'){
        //Remove keyword
        allElements[i].innerHTML = allElements[i].innerHTML.replace(obj.keyword, '');
      }
      else if(obj.type == '1'){
        //Replace keyword with another word of choice
        allElements[i].innerHTML = allElements[i].innerHTML.replace(obj.keyword, obj.replace);
      }
      else if(obj.type == '2'){
        //Hide the section related to the keyword
        allElements[i].style.color='transparent';
      }
      else if(obj.type == '3'){
        // Highlight section related to the keyword
        allElements[i].style.backgroundColor='yellow';
      }
    }
  }
}
