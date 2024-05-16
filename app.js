

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
let error = document.getElementById('error_1')
let apellido_3 = document.getElementById('apellido_3')
let erroR = document.getElementById('error')
let fecha = document.getElementById('fecha')

    
function btn_Registro(){
let Nombre = document.getElementById('nombre_1').value
let Apellido = document.getElementById('apellido_1').value
let edad = document.getElementById('edad_1').value 
let nacimiento = document.getElementById('nacimiento _1').value
var numeroEntre1y100 = Math.floor(Math.random() * 5) + 1;
var numeroEntre1y100_1 = Math.floor(Math.random() * 5) + 1;
let seccioneS = [`${numeroEntre1y100} - ${numeroEntre1y100_1} `]


if( document.getElementById('edad_1').value  >=1 && document.getElementById('edad_1').value<=50  ){

        var Agsnatura_1 = document.getElementsByName('materia')
        var checkedOptions = [];
        
         for (var i = 0; i < Agsnatura_1.length; i++) {
            if (Agsnatura_1[i].checked) {
                    checkedOptions.push(Agsnatura_1[i].value);
                }
        }
        console.log(checkedOptions[0])
        var alnnos = [
            Nombre,
            Apellido,
            edad,
            checkedOptions[0],
            nacimiento
        ]
        
    linkedlist.insert(alnnos)
    console.log(alnnos)
    console.log(noMbre);
    var noMbre = alnnos[0]
    var materia = alnnos[3]
    let apellidO = alnnos[1]
    let eDad = alnnos[2]
    let fechanacido = alnnos[4]
    document.getElementById('registro_12').style.display = 'block'
    document.getElementById('registro_1').style.display = 'none'
    document.getElementById('btno').style.display = 'none'
    nombre_3.textContent = noMbre
    apellido_3.textContent = apellidO
    asisgnatura_3.textContent = materia
    error_1.textContent = eDad
    fecha.textContent = fechanacido
   
    seccion.innerHTML = `${numeroEntre1y100} - ${numeroEntre1y100_1} ` 
    console.log(linkedlist)
    console.log(seccioneS);
} else{
    erroR.innerHTML = 'falta una un campo por llenar'
}
     
    
    

}



function cerrrar_sesion() {
 document.getElementById('nombre_1').value = ''
 document.getElementById('apellido_1').value = ''
 document.getElementById('edad_1').value = '' 
 document.getElementById('nacimiento _1').value = ''
 document.getElementById('registro_12').style.display = 'none'
    document.getElementById('registro_1').style.display = 'block'
    document.getElementById('btno').style.display = 'block'
}






