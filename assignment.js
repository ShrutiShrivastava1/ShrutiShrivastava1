
function sort(){
 var container = document.getElementById("container");
  var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('shuffleMe'));
    elementsArray.forEach(function(element){
    container.removeChild(element);
  })
  sortAsc(elementsArray);
  elementsArray.forEach(function(element){
  container.appendChild(element);
})
}
function sortAsc(arr){
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i].innerHTML.trim().toString() > arr[j].innerHTML.trim().toString()) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
	 return arr;
}
function shuffle() {
  var container = document.getElementById("container");
  var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('shuffleMe'));
    elementsArray.forEach(function(element){
    container.removeChild(element);
  })
  shuffleArray(elementsArray);
  elementsArray.forEach(function(element){
  container.appendChild(element);
})
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
