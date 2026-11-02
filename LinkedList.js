import Node from "./Node.js";

class LinkedList {
constructor() {
    this.headNode = null;
}

append(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
        this.headNode = newNode;
        return;
    }

    let current = this.headNode;

    while (current.nextNode !== null) {
        current = current.nextNode;
    }

    current.nextNode = newNode;
}

prepend(value) {
    const newNode = new Node(value, this.headNode);

    this.headNode = newNode;
}

size() {
    let count = 0;
    let current = this.headNode;

    while (current !== null) {
        count++;
        current = current.nextNode;
    }
    return count;
}

head() {
    if (this.headNode === null) return undefined;
    return this.headNode.value;
}

tail() {
    if (this.headNode === null) return undefined;

    let current = this.headNode;
    while (current.nextNode !== null) {
        current = current.nextNode;
    }
    return current.value;
}

at(index) {
    let current = this.headNode;
    let count = 0;

    while (current !== null) {
        if (count === index) return current.value;
        count++;
        current = current.nextNode;
    }

    return undefined;
}

contains(value) {
    let current = this.headNode;

    while (current !== null) {
        if (current.value === value) return true;
        current = current.nextNode;
    }
    return false;
}

findIndex(value) {
    let current = this.headNode;
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
    let current = this.headNode;

    while (current !== null) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
    }
    return result + "null";
}

// Removes the last node and returns its value.
pop() {
    if (this.headNode === null) return undefined;

    if (this.headNode.nextNode === null) {
        const onlyValue = this.headNode.value;
        this.headNode = null;
        return onlyValue;
    }

    let previousNode = this.headNode;
    while (previousNode.nextNode.nextNode !== null) {
        previousNode = previousNode.nextNode;
    }
    const poppedValue = previousNode.nextNode.value;
    previousNode.nextNode = null;
    return poppedValue;
}

atNode(index) {
    let current = this.headNode;
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
      this.headNode = this.headNode.nextNode;
      return;
    }

    const previousNode = this.atNode(index - 1);
    const nodeToRemove = previousNode.nextNode;
    previousNode.nextNode = nodeToRemove.nextNode;
}
}

export default LinkedList;