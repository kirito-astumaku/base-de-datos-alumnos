

function bntinicio(){
    document.getElementById("registro_1").style.display = 'none'
    document.getElementById('inicioDesecion_1').style.display = 'block'
}


function registro_btn5234(){
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
let edadt = document.getElementById('edad_1').value  
let nombre_lista = document.getElementById('nombre_lista') 
let materia_asignada = document.getElementById('materia_asignada')
let Nombre;
let alnnos;




function btn_Registro(){
 Nombre = document.getElementById('nombre_1').value
let Apellido = document.getElementById('apellido_1').value
let nacimiento = document.getElementById('nacimiento _1').value
let edad = document.getElementById('edad_1').value    
var numeroEntre1y100 = Math.floor(Math.random() * 5) + 1;
var numeroEntre1y100_1 = Math.floor(Math.random() * 5) + 1;
let seccioneS = [`${numeroEntre1y100} - ${numeroEntre1y100_1} `]
let alnnos;
let nombre_del_grupo = document.getElementById('nombre_del_grupo')
let nombre_estudiante = document.getElementById('nombre_estudiante')


if( document.getElementById('edad_1').value  >=1 && document.getElementById('edad_1').value<=50  ){

        var Agsnatura_1 = document.getElementsByName('materia')
        var checkedOptions = [];
        
         for (var i = 0; i < Agsnatura_1.length; i++) {
            if (Agsnatura_1[i].checked) {
                    checkedOptions.push(Agsnatura_1[i].value);
                }
        }
        console.log(checkedOptions[0])
           alnnos = [
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
    document.getElementById('registro_1').style.display = 'none'
    document.getElementById('btno').style.display = 'none'
    document.getElementById('inici_2').style.paddingBottom = '44.9%'
    document.getElementById('casa').style.display = 'block'
    nombre_3.textContent = noMbre
    apellido_3.textContent = apellidO
    asisgnatura_3.textContent = materia
    materia_asignada.textContent = materia
    error_1.textContent = eDad
    fecha.textContent = fechanacido
    seccion.innerHTML = `${numeroEntre1y100} - ${numeroEntre1y100_1} ` 
    nombre_lista.textContent = `${noMbre} ${apellidO}`
    nombre_del_grupo.textContent = `${'la seccion'} ${seccioneS}`
    nombre_estudiante.textContent = noMbre
    console.log(linkedlist)
    console.log(seccioneS);
} else{
    erroR.innerHTML = 'falta una un campo por llenar'
}
}
/* ------------------------------------------------------------------------------------- */

const usuarios = [
    { username: alnnos[0], password: alnnos[2] },
];

// Obtener el formulario y el mensaje
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

// Agregar un listener para el evento de envío del formulario
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Llamar a la función de inicio de sesión
    iniciarSesion(username, password);
});

// Función de inicio de sesión
function iniciarSesion(username, password) {
    // Buscar el usuario en el array
    const usuario = usuarios.find(user => user.username === username && user.password === password);

    // Verificar si se encontró el usuario
    if (usuario) {
        message.textContent = 'Inicio de sesión exitoso';
        message.style.color = 'green';
    } else {
        message.textContent = 'Nombre de usuario o contraseña incorrectos';
        message.style.color = 'red';
    }
}




/* ------------------------------------------------------------------------------------- */
function cerrrar_sesion() {
    if( document.getElementById('edad_1').value  >=1 && document.getElementById('edad_1').value<=50  ){

 document.getElementById('nombre_1').value = ''
 document.getElementById('apellido_1').value = ''
 document.getElementById('edad_1').value = '' 
 document.getElementById('nacimiento _1').value = ''
 /* ----------------------------------------------------- */
document.getElementById('registro_12').style.display = 'none'
document.getElementById('registrO').style.display = 'none'
document.getElementById('registro_1').style.display = 'block'
document.getElementById('btno').style.display = 'block'
document.getElementById('calificafiones_1').style.display = 'none'
document.getElementById('casa').style.display = 'none'
}
}

function perfil(){
    if( document.getElementById('edad_1').value  >=1 && document.getElementById('edad_1').value<=50){

    document.getElementById('registro_12').style.display = 'block' 
    document.getElementById('registrO').style.display = 'none'
    document.getElementById('calificafiones_1').style.display = 'none'
    /* -------------------------------------------------------- */
    document.getElementById('Inicio').style.background = 'none'
    document.getElementById('Calificaciones').style.background = 'none'
    document.getElementById('Grupo').style.background = 'none'
    document.getElementById('Perfil').style.background = 'rgb(0, 122, 244)'

 
}

}

function grupo(){
    if( document.getElementById('edad_1').value  >=1 && document.getElementById('edad_1').value<=50){
        
    document.getElementById('registro_12').style.display = 'none'
    document.getElementById('registrO').style.display = 'block'
    document.getElementById('calificafiones_1').style.display = 'none'
    /* ------------------------------------------------------------ */
    document.getElementById('Inicio').style.background = 'none'
        document.getElementById('Calificaciones').style.background = 'none'
        document.getElementById('Grupo').style.background = 'rgb(0, 122, 244)'
        document.getElementById('Perfil').style.background = 'none'

}
}

function calificaciones(){
    if( document.getElementById('edad_1').value  >=1 && document.getElementById('edad_1').value<=50){

        document.getElementById('Inicio').style.background = 'none'
        document.getElementById('Calificaciones').style.background = 'rgb(0, 122, 244)'
        document.getElementById('Grupo').style.background = 'none'
        document.getElementById('Perfil').style.background = 'none'
        /* -------------------------------------------- */
        document.getElementById('registrO').style.display = 'none'
        document.getElementById('calificafiones_1').style.display = 'block'

}
}

function inicio(){
    if( document.getElementById('edad_1').value  >=1 && document.getElementById('edad_1').value<=50){

        document.getElementById('Inicio').style.background = 'rgb(0, 122, 244)'
        document.getElementById('Calificaciones').style.background = 'none'
        document.getElementById('Grupo').style.background = 'none'
        document.getElementById('Perfil').style.background = 'none'
        /* ---------------------------------------------------------- */
        document.getElementById('registrO').style.display = 'none'
        document.getElementById('calificafiones_1').style.display = 'none'
        document.getElementById('casa').style.display = 'block'
        
}
}


let li_1 = document.getElementById('li_1')
let li_2 = document.getElementById('li_2')
let li_3 = document.getElementById('li_3')
let li_4 = document.getElementById('li_4')
let li_5 = document.getElementById('li_5')
let li_Mejor_1 = document.getElementById('li_Mejor_1')
let li_Mejor_2 = document.getElementById('li_Mejor_2')
let li_Mejor_3 = document.getElementById('li_Mejor_3')
let reporbaste = document.getElementById('reporbaste')
let error_de_escritora = document.getElementById('error_de_escritora')

/*  var calificaciones;  */
 
function datos_notas(){

    const numeros_para_nota_1 = parseFloat(document.getElementById('numeros_para_nota_1').value);
    const numeros_para_nota_2 = parseFloat(document.getElementById('numeros_para_nota_2').value);
    const numeros_para_nota_3 = parseFloat(document.getElementById('numeros_para_nota_3').value);
    const numeros_para_nota_4 = parseFloat(document.getElementById('numeros_para_nota_4').value);



           
    if(numeros_para_nota_1 >=1 && numeros_para_nota_1<=10){
        error_de_escritora.innerHTML = ''
    if(numeros_para_nota_2 >=1 && numeros_para_nota_2<=10){
        error_de_escritora.innerHTML = ''
    if(numeros_para_nota_3 >=1 && numeros_para_nota_3<=45){
        error_de_escritora.innerHTML = ''
    if(numeros_para_nota_4 >=1 && numeros_para_nota_4<=35){

        const calificaciones = [
          numeros_para_nota_1,
          numeros_para_nota_2,
          numeros_para_nota_3,
          numeros_para_nota_4,
           ]
            console.log(calificaciones) 
           const nota_final = calificaciones.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
           li_5.innerHTML = `${nota_final}${'%'}`
           li_1.innerHTML = `${calificaciones[0]}${'%'}`
           li_2.innerHTML = `${calificaciones[1]}${'%'}`
           li_3.innerHTML = `${calificaciones[2]}${'%'}`
           li_4.innerHTML = `${calificaciones[3]}${'%'}`
           console.log(nota_final);

           if(nota_final >= 1 && nota_final<=64){
              reporbaste.innerHTML = 'Reprobaste' 
           }else{
            reporbaste.innerHTML = 'Aprobaste'
           }

           let nombre = [Nombre]

           if(nota_final >=89 && nota_final<= 100){
            li_Mejor_1.innerHTML = nombre
            li_Mejor_2.innerHTML = 'jose pablo'
            li_Mejor_3.innerHTML = 'santiago roque'
           }if(nota_final >=79 && nota_final<= 90){
            li_Mejor_1.innerHTML = 'jose pablo'
            li_Mejor_2.innerHTML = nombre
            li_Mejor_3.innerHTML = 'santiago roque'
           }if(nota_final >=69 && nota_final<= 80){
            li_Mejor_1.innerHTML = 'jose pablo'
            li_Mejor_2.innerHTML = 'santiago roque'
            li_Mejor_3.innerHTML = nombre
           }



           document.getElementById('numeros_para_nota_1').value = ''
           document.getElementById('numeros_para_nota_2').value = ''
           document.getElementById('numeros_para_nota_3').value = '' 
           document.getElementById('numeros_para_nota_4').value = ''
           error_de_escritora.innerHTML = ''
    }else{
        error_de_escritora.innerHTML = 'escrive los valores corrrectos'
    }
    }else{
        error_de_escritora.innerHTML = 'escrive los valores corrrectos'
    }
    }else{
        error_de_escritora.innerHTML = 'escrive los valores corrrectos'
    }
    }else{
        error_de_escritora.innerHTML = 'escrive los valores corrrectos'
    }
} 




