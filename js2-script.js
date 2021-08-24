var htmlTitle = document.querySelector('#html-title');
var cssTitle = document.querySelector('#css-title');
var jsTitle = document.querySelector('#js-title');
var blueSquare = document.querySelector('#blue-square');

htmlTitle.addEventListener('mouseover', redText);
/* blueSquare.addEventListener('click', moveRight);
 */blueSquare.style.marginLeft = '0px';


setInterval(increment, 500);
setInterval(blinkTitle, 500);
setTimeout(whiteText, 1500);

function whiteText() {
    cssTitle.style.color = "white";
}
function blinkTitle() {
    if (jsTitle.style.color != "yellow") {
        jsTitle.style.color = "yellow";
        jsTitle.style.border = "3px solid yellow";
    } else {
        jsTitle.style.color = "black";
        jsTitle.style.border = "3px solid black";
    }
}

function increment() {
    value = blueSquare.innerHTML;
    value = parseInt(value); // transforme value en int
    value = value + 1;
    blueSquare.innerHTML = value;
}

function redText() {
    if (htmlTitle.style.color != "red") {
        htmlTitle.style.color = "red";
    } else {
        htmlTitle.style.color = "white";
    }
};



setTimeout(yellowText, 1000);

function yellowText() {
    htmlTitle.style.color = "yellow";
}
setTimeout(blackText, 2500);

function blackText() {
    htmlTitle.style.color = "black";
}

/*
function moveRight() {
  var position = blueSquare.style.marginLeft;
/*   function move () {
    if (position >= 700) {
        setInterval(moveRight);
    } else setInterval(moveLeft);
} 

  position = parseInt(position); // supprime le 'px' pour avoir un int
  var add = 50;
  position = position+add; // ajoute 50 à position
   /* if ((position >= 300)|| (position <=0)) {add*=-1};
        
    
  position = position+'px'; // ajoute 'px' pour obtenir une valeur-CSS
  blueSquare.style.marginLeft = position;
}*/

//setTimeout(moveLeft, 500);
setInterval(moveBox, 500);
//setTimeout(moveRight, 2000);

/* var add = 600;
 */function moveBox() {
/*     var position = blueSquare.style.marginLeft;
    position = parseInt(position);
 */
/*     position = position + add; // ajoute 50 à position
 */    if (blueSquare.style.marginLeft == '0px') { /* ((position >= 600) || (position <= 0)) { add *= -1, */
        blueSquare.style.marginLeft = '600px'
        blueSquare.style.backgroundColor = 'red';
    } else {
        blueSquare.style.marginLeft = '0px'
        blueSquare.style.backgroundColor = 'blue';
    };
    /* = position-700;
    position = position + 'px';
    blueSquare.style.marginLeft = position;*/

}
