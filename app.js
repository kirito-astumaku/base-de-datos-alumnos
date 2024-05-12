

function bntinicio(){
    document.getElementById("registro_1").style.display = 'none'
    document.getElementById('inicioDesecion_1').style.display = 'block'
}


function btnregistro(){
    document.getElementById("registro_1").style.display = 'block'
    document.getElementById('inicioDesecion_1').style.display = 'none'
}








let nombre_3 = document.getElementById('nombre_3')
let seccion =  document.getElementById('seccion')
let asisgnatura_3 = document.getElementById('asisgnatura_3')
let error = document.getElementById('error')
    
function btn_Registro(){
        error.innerHTML = `${'tienes que escribir algo en este espacio'}` 
        let Nombre = document.getElementById('nombre_1').value
    let Apellido = document.getElementById('apellido_1').value
    let edad = document.getElementById('edad_1').value 
   let Agsnatura = document.getElementById('asisgnatura_V2').value

    var alnnos = [
        Nombre,
        Apellido,
        edad,
        Agsnatura, 
    ]
    linkedlist.insert(alnnos)
    console.log(alnnos[3])
    console.log(noMbre);
    var noMbre = alnnos[0]
    var materia = alnnos[3]
    document.getElementById('registro_12').style.display = 'block'
    document.getElementById('registro_1').style.display = 'none'
    document.getElementById('btno').style.display = 'none'
    nombre_3.textContent = noMbre
    var numeroEntre1y100 = Math.floor(Math.random() * 5) + 1;
    var numeroEntre1y100_1 = Math.floor(Math.random() * 5) + 1;
    seccion.innerHTML = `${numeroEntre1y100} - ${numeroEntre1y100_1} `  
    
    

}



