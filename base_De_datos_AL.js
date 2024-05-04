


let nombre_3 = document.getElementById('nombre_3')
let seccion =  document.getElementById('seccion')
let asisgnatura_3 = document.getElementById('asisgnatura_3')


class aLUMnosnuevos{
    constructor(nombre,apellido,edad,agisnatura){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.agisnatura = agisnatura
    }

    nomBre_(){
        nombre_3.innerHTML = this.nombre
    }
}

 let save = [] 

function btn_Registro(){
    let Nombre = document.getElementById('nombre_1').value
    let Apellido = document.getElementById('apellido_1').value
    let edad = document.getElementById('edad_1').value 
    let Agsnatura = document.getElementById('asisgnatura_V2').value
    let alumnos = new aLUMnosnuevos(Nombre,Apellido,edad,Agsnatura)
    console.log(alumnos)
    save.push()
    console.log(save[0])
    nomBre_()
    document.getElementById('registro_12').style.display = 'block'
    document.getElementById('registro_1').style.display = 'none'

}







