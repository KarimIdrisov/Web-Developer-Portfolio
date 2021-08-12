// Array
// Object
// Set
// Map

// Linked List
// [value, next] -> [value, next] 

class Node {
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
   }

   append(data) {
      const node = new Node(data);

      if (this.tail) {
         this.tail.next = node;
      }

      if (!this.head) {
         this.head = node;
      }

      this.tail = node;
   }

   prepend(data) {
      const node = new Node(data, this.head);

      if (!this.tail) {
         this.tail = node;
      }

      this.head = node;
   }

   find(data) {
      if (!this.head) {
         return;
      }

      let current = this.head

      while (current) {
         if (current.data === data) {
            return current;
         }

         current = current.next
      }
   }

   toArray() {
      let current = this.head;
      const output = [];

      while (current) {
         output.push(current);

         current = current.next;
      }

      return output;
   }
}

const list = new LinkedList();
