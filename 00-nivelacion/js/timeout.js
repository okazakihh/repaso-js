const evaluar = () =>{
    const edad = prompt("cual es tu edad?");
    if(edad < 18){
        alert("menor de edad");
        return
    }
    alert("mayor de edad");
};
setTimeout(evaluar,2000);