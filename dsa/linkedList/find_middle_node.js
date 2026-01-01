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


function getMiddleNode (head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
    }


    console.log(getMiddleNode(list.head));