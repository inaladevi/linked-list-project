import Node from "./Node.js";

class LinkedList {
constructor() {
    this.head = null;
}

append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
        this.head = newNode;
        return;
    }

    let current = this.head;

    while (current.nextNode !== null) {
        current = current.nextNode;
    }

    current.nextNode = newNode;
}

prepend(value) {
    const newNode = new Node(value, this.head);

    this.head = newNode;
}

size() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
        count++;
        current = current.nextNode;
    }
    return count;
}

head() {
    if (this.head === null) return undefined;
    return this.head.value;
}

tail() {
    if (this.head === null) return undefined;

    let current = this.head;
    while (current.nextNode !== null) {
        current = current.nextNode;
    }
    return current.value;
}

at(index) {
    let current = this.head;
    let count = 0;

    while (current !== null) {
        if (count === index) return current.value;
        count++;
        current = current.nextNode;
    }

    return undefined;
}

contains(value) {
    let current = this.head;

    while (current !== null) {
        if (current.value === value) return true;
        current = current.nextNode;
    }
    return false;
}

findIndex(value) {
    let current = this.head;
    let count = 0;

    while (current !== null) {
        if (current.value === value) return count;
        count++;
        current = current.nextNode;
    }
    return -1;
}

toString() {
    let result = "";
    let current = this.head;

    while (current !== null) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
    }
    return result + "null";
}

pop() {
    if (this.head === null) return undefined;

    const poppedValue = this.head.value;
    this.head = this.head.nextNode;
    return poppedValue;
}

atNode(index) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
        if (count === index) return current; 
        count++;
        current = current.nextNode;
    }
    return null;
}


insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
        throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
        for (const value of values.reverse()) {
            this.prepend(value);
        }
        return;
    }

    let previousNode = this.atNode(index - 1);
    let afterNode = previousNode.nextNode;

    for (const value of values) {
        const newNode = new Node(value);
        previousNode.nextNode = newNode;
        previousNode = newNode;
    }
    previousNode.nextNode = afterNode;
}

removeAt(index) {
    if (index < 0 || index >= this.size()) {
        throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      this.pop();
      return;
    }

    const previousNode = this.atNode(index - 1);
    const nodeToRemove = previousNode.nextNode;
    previousNode.nextNode = nodeToRemove.nextNode;
}
}

export default LinkedList;