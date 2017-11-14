// Tasks
$(function(){
    // 1. Add the “selected” class to the first element of the menú
    $("#menu li:first").addClass("selected");

    // 2. Add the “middle” class to the middle articles in the <section> tags
    $("section article:not(:first-child):not(:last-child)").addClass("middle");

    // 3. Add the “highlighted” class to the .list-item even elements
    $(".list-item:even").addClass("highlighted");


    // 4. Add a “1px solid #eee” border to the last .list-item element
    $(".list-item:last").css("border", "1px solid red");

    // 5. In the form, change the border color of the focused input
    $("form input").mouseover(function(){
       //  this.style.border= "1px solid red";
       // lo de arriba es lo mismo pero aplicando directamente el estilo al elemento del DOM
       //si queremos aplicarle el estilo mediante jquery hay que convertir el this a jquery
        $(this).css("border", "1px solid red");
    }
        )

});



// Nos devuelve los elementos li, pero OJO que no es un array aunque lo parezca
$("li")
// aunque sí que tiene la propiedad .length
$("li").length
// y tb tiene un método para pasarlo a array y que SI sea un array
liArray = $("li").toarray // mirar bien que no es asi y va mal ?¿




// Nota: document va sin comillas pq no es un elemneto HTML del DOm sino q es el DOM ?¿
$(document).ready(function(){
    console.log("página cargada!");
})

// y lo de antes es lo mismo que esto:
$(function(){
    console.log("y requetecargada!!!!");
})

// ponemos un evento click a todos los "li"
$(function(){
    $("li").click(function(){
        console.log("ejecutando evento click");
        $(this).text("Texto cambiado");
        debugger // esto llama al debugger y es como ponerle un punto de interrupción
    });
})