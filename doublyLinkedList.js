class Node {
    constructor(value) {
        this.value = value === undefined ? null : value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head =  null;
        this.tail = null;
        this.length = 0;
    }

    push(newNode) {
        if(this.length === 0){
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }

    pop() {
        if(this.length === 0) {
            return undefined;
        } else {
            let poppedNode = this.tail;
            if(this.length === 1){
                this.head = this.tail = null;
            } else {
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
                poppedNode.prev = null;
            }
            this.length --;
            return poppedNode;
        }
    }

     unshift(newNode) {
         if(this.length === 0){
             this.head = this.tail = newNode;
         } else {
             newNode.next = this.head;
             this.head.prev = newNode;
             this.head = newNode;
         }
         this.length ++;
         return this;
     }

     shift() {
         if(this.length === 0){
             return undefined;
         } else {
             let shiftedNode = this.head;
             if(this.length === 1){
                 this.head = this.tail = null;
             } else {
                 this.head = this.head.next;
                 this.head.prev =  null;
                 shiftedNode.next = null;
             }
             this.length --;
             return shiftedNode;
         }
     }

     set(index, newValue) {
         let currentIdx, current;
         if(this.length === 0 || index >= this.length) {
             return undefined;
         } else {
             if(this.length / 2 > index){
                 currentIdx = 0;
                 current = this.head;
                while (true) {
                    if(currentIdx === index){ current.value = newValue; }
                    return;
                    current = current.next;
                    currentIdx ++;
                }
             } else {
                 currentIdx = this.length - 1;
                 current = this.tail;
                 while (true) {
                     if(currentIdx === index) { current.value = newValue; }
                     return;
                     current = current.prev;
                     currentIdx --;
                 }
             }
         }
     }

     _get(index) {
         let current, currentIdx;
         if(this.length === 0 || index >= this.length){
             return undefined;
         } else {
             if(this.length / 2 >= index){
                 currentIdx = 0;
                 current = this.head;
                while (true) {
                    if(currentIdx === index){ return current; }
                    current = current.next;
                    currentIdx ++;
                }
             } else {
                 currentIdx = this.length - 1;
                 current = this.tail;
                 while (true) {
                     if(currentIdx === index) { return current; }
                     current = current.prev;
                     currentIdx --;
                 }
             }
         }
     }

     _insert(index, newNode) {
         if(index < 0  || index > this.length){ return; }

         if(this.length === 0){
             this.head = this.tail = newNode;
         } else if(index === 0){
             newNode.next = this.head;
             this.head.prev = newNode;
             this.head = this.head.prev;
         } else if (index === this.length) {
             this.tail.next = newNode;
             newNode.prev = this.tail;
             this.tail = newNode;
         } else {
             let prev;
             if(this.length / 2 >= index){
                 prev = this.head;
                 for(let i = 0; i < index - 1; i ++){
                     prev = prev.next;
                 }
                 newNode.next = prev.next;
                 prev.next.prev = newNode;
                 prev.next = newNode;
                 newNode.prev = prev;
             } else {
                 prev = this.tail;
                 for(let i = this.length - 1; i >= index; i --){
                     prev = prev.prev;
                 }
                 newNode.next = prev.next;
                 prev.next.prev = newNode;
                 prev.next = newNode;
                 newNode.prev = prev;
             }
         }
         return ++this.length;
     }

}




// newNode = new Node(10);
// newNode1= new Node(20);
// newNode2 = new Node(30);
// newNode3 = new Node(40);
// newNode4 = new Node(50);
//
// doubledList = new DoublyLinkedList();
// doubledList.push(newNode);
// doubledList.push(newNode1);
// doubledList.push(newNode2);
// doubledList.push(newNode3);
// doubledList._insert(4, newNode4);
// console.log(doubledList);
