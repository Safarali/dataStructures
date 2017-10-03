class Node {
    constructor(value) {
        this.value = value === undefined ? null : value;
        this.next = null;
    }
}

 class SinglyLinkedList {
     constructor() {
         this.head = null;
         this.tail = null;
         this.length = 0;

         this.get = function (index) {

         }
     }

     push(newNode) {
         if(this.length === 0){
             this.tail = this.head = newNode;
         } else {
             this.tail.next = newNode;
             this.tail = this.tail.next;
         }
         this.length ++;
         return this;
     }

     pop() {
         if(this.length === 0){
             return undefined;
         }
         else{
             let popped = this.tail;
             if(this.length === 1) {
                 this.head = this.tail = null;
            } else {
                let current = this.head;
                while (current) {
                    if(current.next.next === null){
                        current.next = null;
                        this.tail = current;
                    }
                    current = current.next;
                }
            }
            this.length --;
            return popped;
        }
    }
    unshift(newNode) {
        if(this.length === 0){
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }

    shift() {
        if(this.length === 0){
            return undefined;
        } else {
            let shifted = this.head;
            if(this.length === 1){
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
            }
            this.length --;
            return shifted;
        }
    }

    set(index, newValue) {
        if(index < 0 || index >= this.length){
            return false;
        } else {
            let current = this.head;
            let currentId = 0;
            while (true) {
                if(currentId === index){
                    current.value = newValue;
                    return true;
                }
                current = current.next;
                currentId ++;
            }
        }
    }

    _get(index){
        if(index < 0 || index >= this.length){
            return undefined;
        } else {
            let currentId = 0;
            let current = this.head;
            while (true) {
                if(currentId === index){
                    return current;
                }
                current = current.next;
                currentId ++;
            }
        }
    }

    _insert(index, newNode) {
        if(index < 0 || index > this.length){ return; }

        if(this.length === 0){
            this.head = this.tail = newNode;
        } else if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else if(index === this.length){
            [this.tail.next, this.tail] = [newNode, newNode]
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i ++){
                prev = prev.next;
            }
            newNode.next = prev.next;
            prev.next = newNode;

        }
        this.length ++;
        return this.length;
    }

    remove(index) {
        if(index < 0 || index >= this.length){ return; }
        let removed;
        if(index === 0){
            removed = this.head;
            if(this.length === 1){
                this.head = this.tail = null
            } else {
                this.head = this.head.next;
            }

        } else {
            let prev = this.head;
            for(var i = 0; i < index - 1; i ++){
                prev = prev.next;
            }
            removed = prev.next;
            if(index === this.length - 1){
                prev.next = null;
                this.tail = prev;
            } else {
                prev.next = prev.next.next;
            }
        }
        this.length --;
        return removed;
    }

    reverse() {
        if(this.length === 0){
            return;
        } else if(this.length === 1){
            return this;
        } else {
            let current = this.head;
            let next;
            let prev = null;
            while (current) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            // this swaps tail and head 
            [this.head, this.tail] = [this.tail, this.head];

        }
        return this;
    }
}
