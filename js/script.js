var georges = document.getElementById("georges");
//georges.onmouseout = function (e) {
//    alert("Bonjourururuuur tu as cliqué sur " + e.type);
//}

georges.addEventListener('change', function (e) {
   alert("tu as écrit sur " + e.target.value);
   var valeur = e.target.value;
   console.log(valeur);
}, false);
document.getElementById('id1').addEventListener('click', function (e) {
   alert("tu as cliqué sur " + e.target.id + " et tu es sur " + e.currentTarget.id);
}, false);

document.getElementById('id2').addEventListener('click', function (e) {

       alert("tu as cliqué sur " + e.target.id + " et tu es sur " + e.currentTarget.id);
       e.stopPropagation()
   },
   false);
var black = document.getElementsByClassName('black');
var textlorem = document.getElementById('textlorem');
var typemouse = "click";
var tournervalue = 15;
var tourner = 0;



function blackreturn(x) {
   x.style.color = "black";
}

document.getElementById('bt1').addEventListener(typemouse, function () {
   if (textlorem.style.color == "blue") {
       blackreturn(textlorem);
       blackreturn(bt1);
   } else {
       textlorem.style.color = "blue";
       bt1.style.color = "blue";
   }
});
document.getElementById('bt2').addEventListener(typemouse, function (e) {
   textlorem.style.display = "block";
   bt2.style.color = "red";
   textlorem.style.color = "red";
   textlorem.innerHTML = "Vous avez cliquez une fois sur " + e.target.innerHTML;
});
//document.getElementById('bt3').addEventListener('keydown', function (e) {
//    bt3.style.color = "green";
//    textlorem.style.color = "green";
//    if (e.keyCode == 39) {
//        tourner = "translateX(" + tournervalue + "px)"
//        tournervalue = tournervalue + 15;
//    } else if (e.keyCode == 37) {
//        tourner = "translateX(" + tournervalue + "px)"
//        tournervalue = tournervalue + -15;
//    } else if (e.keyCode == 38) {
//        tourner = "translateY(" + tournervalue + "px)"
//        tournervalue = tournervalue + -15;
//    } else if (e.keyCode == 40) {
//        tourner = "translateY(" + tournervalue + "px)"
//        tournervalue = tournervalue + 15;
//    }
//    console.log(tourner);
//    textlorem.style.transform = tourner;
//});

document.getElementById('dessus').addEventListener('keyleft', function () {
   //    dessus.style.backgroundColor = 'red';
   dessus.innerHTML = 'Bravo !!!';
})

document.getElementById('cliqueback').addEventListener("click", function () {
   document.getElementById('dessous').innerHTML = getComputedStyle(dessus).backgroundColor;


});

document.getElementById("tog").addEventListener('click', function () {
   tog.classList.toggle("couleurbleue");
   console.log(tog.className);
})
var elements = document.getElementsByClassName('class1');
for (var i = 0; i < elements.length; i++) {
   elements[i].style.color = 'blue';
}

var nveauLien = document.createElement('a');
nveauLien.href = "http://google.fr";
nveauLien.target = "_blank";
nveauLien.innerHTML = "czepcizepcizencpzezpic";
document.getElementById('troistrucs1').appendChild(nveauLien);


var supercompteur = 1;

document.getElementById("superbutton").addEventListener('click', function () {
   var nvlElmt = document.createElement('div');
   nvlElmt.innerHTML = "element" + supercompteur;
   nvlElmt.id = "id" + supercompteur;
   nvlElmt.className = "superClass";
   document.getElementById("supertruc").appendChild(nvlElmt);
   supercompteur++;
   nvlElmt.addEventListener('click', function () {
       document.getElementById("supertruc").removeChild(nvlElmt);
   })
})
window.addEventListener('keypress', function (e) {
    console.log(e.keyCode);
    document.getElementById("img1").style.transition = "all 0.4s";
    var positionAvionTop = document.getElementById("img1").offsetTop;
    var positionAvionLeft = document.getElementById("img1").offsetLeft;

    if (e.keyCode == 39) {

        document.getElementById("img1").style.left = document.getElementById("img1").offsetLeft + 100 + 'px';
        console.log(document.getElementById("img1").offsetLeft);
    };
    if (e.keyCode == 40) {
        document.getElementById("img1").style.top = document.getElementById("img1").offsetTop + 100 + 'px';
        console.log(document.getElementById("img1").offsetTop);

    };
    if (e.keyCode == 37) {
        document.getElementById("img1").style.left = document.getElementById("img1").offsetLeft - 100 + 'px';
        console.log(document.getElementById("img1").offsetLeft);

    };
    if (e.keyCode == 38) {
        document.getElementById("img1").style.top = document.getElementById("img1").offsetTop - 100 + 'px';
        console.log(document.getElementById("img1").offsetTop);
    };
    if (e.keyCode == 0) {
        console.log("coucoyu");
        document.getElementById("son").play();
        document.getElementById("missile").offsetTop = positionAvionTop;
        document.getElementById("missile").offsetLeft = positionAvionLeft;

    };
    if (document.getElementById("img1").offsetTop < 600 && document.getElementById("img1").offsetLeft < 150) {
        document.getElementById("son").play();
        document.getElementById("dessus").style.backgroundColor = "blue";
        document.getElementById("img1").src = "img/boom.png";
    }

})
//function myFunction() {
//    alert("bonjour");
//    console.log("Je suis bien content");
//    var machin = document.createElement("p");
//    document.getElementById("popup").appendChild(machin);
//    machin.innerHTML = "ceci est un popup";
//}
