

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
           if(current == null)
            break
           
            
             linkedliststring += `${current.data} ->` 
             current = current.next
        }

        return linkedliststring = linkedliststring + 'null'
    }


     searchIFExist(data){
        let current = this.head
        while(current !== null && current.data !== data){
             current = current.next
        }

        return current !== null
    }  
}



let linkedlist = new Linkedlist()




   console.log(linkedlist)
