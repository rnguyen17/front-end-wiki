var util = require('util');

var LinkedList = function() {
	this.head = new Node('head');
}

var Node = function(item) {
	this.element = item;
	this.next = null;
}

LinkedList.prototype.findNode = function(element) {
	var currentNode = this.head;

	while (currentNode.element != element) {
		currentNode = currentNode.next;
	}

	return currentNode;
}

LinkedList.prototype.insertNode = function(item, node) {
	var prevNode = this.findNode(node),
		newNode = new Node(item);

	newNode.next = prevNode.next;
	prevNode.next = newNode;
}

var llist = new LinkedList();

llist.insertNode('billy bob', 'head');
llist.insertNode('yo mama', 'billy bob');
llist.insertNode('joe killa', 'billy bob');
llist.insertNode('zztop', 'head');

console.log(util.inspect(llist, {depth: null}));

// var a = {
// 	first: 'billy',
// 	middle: 'joe',
// 	last: 'biden',
// 	info: {
// 		meme: 'dank',
// 		birthday: {
// 			month: 'january',
// 			day: 1,
// 			year: 1999
// 		}
// 	}
// }

// console.log(a);