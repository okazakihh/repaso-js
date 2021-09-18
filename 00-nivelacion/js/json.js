 var persona = {
     test : "blanca",
     altura : 1.74,
     baila : false,
     setMusic: function(){
         this.baila = true;
     },
 };
 console.log(persona);
const {name,edad,altura,tes,mail} = {
    name: "Jose",
    edad: "24",
    altura: "1.74 cm",
    tes: "blanca",
    mail: "prueba@prueba.com",
};

document.write("<p>" + "Nombre: "+ name + "</p>");
document.write("<p>" + "Edad: " + edad + "</p>");
document.write("<p>" + "Altura: " + altura + "</p>");
document.write("<p>" + "Piel: " + tes + "</p>");
document.write("<p>" + "Mail: " + mail + "</p>");
