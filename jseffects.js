var textToAdd = "¡Hola! Bienvenido/a:"+"\n" +
         "Mi nombre es Inés y, aunque no lo puedas ver, te recibo con una enorme sonrisa. \n" +
         "Soy una estudiante de universidad que se dedica a programar por pasión. Por las mañanas me preocupo por núcleos atómicos, cargas en movimiento, órbitas espirales y agujeros negros. " +
         "Por las tardes me gusta programar y diseñar webs. " +
         "Mi política es simple: Actúo siempre de corazón. Mimo cada proyecto como si fuera el único y, si te gusta trabajar en equipo, prometo no defraudarte. " +
         "Siéntete libre de echar un vistazo a mis proyectos y, si crees que te puede interesar lo que ofrezco, ¡no dudes en contactarme!";
var placeHolder = 0;

/*jslint plusplus: true */
var textAdder = setInterval(function () {
    "use strict";
    document.getElementById("text").innerHTML += textToAdd.charAt(placeHolder);
    if (++placeHolder === textToAdd.length) {
        clearInterval(textAdder);
    }
}, 40);