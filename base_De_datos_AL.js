

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Linkedlist{
    constructor(head = null){
         this.head = head
    }

    insert(data){
       let nudo = new Node(data)

       if(this.head == null){
          this.head = nudo
       }else{
        let current = this.head
        while(current.next != null){
            current = current.next
            
        }

         current.next = nudo
        
       }
    }

    delete(data){
        let current = this.head
        let prev = this.head
        if(this.head != null){
           if(this.head.data == data){
               current = current.next
               this.head = current
           }else{
            while(current.data !== data && current.next != null){
               prev = current
               current = current.next

            }

            if(current.data == data){
                prev.next = current.next
            }else{
                console.log('no hay ningun dato')
            }
        }
        }else{
            console.log('la lista esta vacia ')
        }
    }


    print(){
        let linkedliststring = ''
        let current = this.head
        while(true){
           if(current == null){
            break

            linkedliststring += `${current.data} ->`
            current = current.next
           }
        }

        return linkedliststring = linkedliststring + 'null'
    }


     searchIFExist(data){
        let current = this.head
        while(current.data !== data && current.next !== null){
             current = current.next
        }

        return current !== null
    } 
}



let linkedlist = new Linkedlist()

linkedlist.insert(1)
linkedlist.insert(2)
linkedlist.insert(3)
linkedlist.insert(4)

console.log(linkedlist)

linkedlist.delete(2)

console.log(linkedlist)

console.log(linkedlist.print())































































































/* 
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

    nombre_4(hola){
        nombre_3.innerHTML = hola
    }
}

 let save = ['','','',''] 

function btn_Registro(){
    let Nombre = document.getElementById('nombre_1').value
    let Apellido = document.getElementById('apellido_1').value
    let edad = document.getElementById('edad_1').value 
    let Agsnatura = document.getElementById('asisgnatura_V2').value
    let alumnos = new aLUMnosnuevos(Nombre,Apellido,edad,Agsnatura)
    console.log(alumnos)
    save = this.nombre
    document.getElementById('registro_12').style.display = 'block'
    document.getElementById('registro_1').style.display = 'none'
    document.getElementById('btno').style.display = 'none'
    nombre_3.innerHTML = this.nombre
     
}
 */
