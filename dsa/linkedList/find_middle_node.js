const util = require('util');

// create a linkedList
function MyNode (val) {
    this.val = val;
    this.next = null;
}

function MyLinkedList () {
    this.head = null;
    this.size = 0;
}

MyLinkedList.prototype.addAtHead = function (val) {
    var newNode = new MyNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

const list = new MyLinkedList();
list.addAtHead(5);
list.addAtHead(6);
list.addAtHead(7);
list.addAtHead(8);
list.addAtHead(9);


// console.log(util.inspect(list, {showHidden: false, depth: null, colors: false}));

/**
 * Get Middle Node of Linked List 
 */
function getMiddleNode (head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

/**
 * Reverse a Linked List
 */

function reverseALinkedList(head) {
    let prev = null;
    let curr = head;
    let temp = null;

    while(curr) {
        temp = curr.next; // store the next node for saving it to get lost
        curr.next = prev; // reverse the pointer
        prev = curr; // move the prev pointer to curr
        curr = temp; // move the curr pointer to temp
    }

     /**
     *  why we are returning head?
     *  too show the point where linked list is being start
     */
    head = prev;
    return head;
}



console.log(util.inspect(reverseALinkedList(list.head), {showHidden: false, depth: null, colors: false}));