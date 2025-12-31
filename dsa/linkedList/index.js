const util = require('util');
// Linked List


/**
 * --------- new keyword -----------------
 *  new is used to create an instance (object) from a constructor function or class.
 * 
 *  const obj = new Constructor();
 * 
 *  Creates a new empty object { }
 *  Binds this inside Constructor to that object
 *  Links the object to the prototype
 *  obj.__proto__ === Constructor.prototype
 *  Returns the object (unless constructor returns another object)
 */


/**
 * ----- Create a node -----
 *  A node contains two parameters
 *  1. value
 *  2. next - points to new node - refrence
 */ 
function MyNode (val) {
    this.val = val;
    this.next = null;
}

// Create a linked list - Zero size
function MyLinkedList () {
    this.head = null;
    this.size = 0;
}

// Methods of MylinkedList - addAtHead, AddAtTail
MyLinkedList.prototype.addAtHead = function (val) {
    // new node instance
    var newNode = new MyNode(val);

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

/**
 * ----------- STEPS ----------
 * 1. Create new node
 * 2. reach last node
 * 3. link new node at the last
 * 4. handle corner cases
 * 5. increae the sie - size++
 */
MyLinkedList.prototype.addAtTail = function (val) {
    var newNode = new MyNode(val);

    if (!this.head) {
        this.head = newNode;
    } else {
        var current = this.head;

        // loop unill that last node - where next is null
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.size++;
}

MyLinkedList.prototype.addAtIndex = function (val, index) {
    if (index < 0 || index > this.size) {
        return;
    }

    const newNode = new MyNode(val);

    if (index === 0) {
        this.addAtHead(val);
        return;
    } else if (index === this.size) {
        this.addAtTail(val)
        return;
    } else {
        let cur = this.head;

        for(let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }

        // first connect newNode next with the currents next node
        // because it will lost if we try to add the node at head first
        newNode.next = cur.next;
        cur.next = newNode;
       
    }

    this.size++;
}

// add a node to MyLinkedList
const list = new MyLinkedList();
list.addAtHead(5);
list.addAtHead(6);
list.addAtTail(7);
list.addAtIndex(11, 1);


/**
 * Get node at give index
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }
   let curr = this.head;
   
   for(let i = 0; i < index; i++) {
       curr = curr.next;
   }

    return curr.val;
}

// console.log("Value at index 2:", list.get(2));
// console.log("Value at index 7:", list.get(7));

/**
 * Remove Node at index
 */

MyLinkedList.prototype.deleteAtIndex = function (index) {
    let curr = this.head;

    // edge case - when index is out of bound
    if (index < 0 || index >= this.size) {
        return -1;
    }

    // edge case - when index is 0 (on head)
    // simple make next node as head
    if (index === 0) {
        this.head = this.head.next;
    } else {
        // this case will also handle tail index
        // because last node next is null 
        // so it will set the second last node next to null
        for(let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
    
        curr.next = curr.next.next; 
    } 
    
    this.size--;  
}

list.deleteAtIndex(1)


console.log(util.inspect(list, {showHidden: false, depth: null, colors: false}));
