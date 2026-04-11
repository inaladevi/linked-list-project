import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("hamster");

console.log(list.toString());
console.log("Size:", list.size());
console.log("At index 2:", list.at(2));