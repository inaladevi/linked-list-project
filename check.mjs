import LinkedList from "./LinkedList.js";
let ok = true;
const check = (name, cond) => { console.log((cond ? "PASS " : "FAIL ") + name); if (!cond) ok = false; };

const list = new LinkedList();
check("head() on empty list is undefined", list.head() === undefined);
list.append("dog"); list.append("cat"); list.append("parrot"); list.prepend("hamster");
check("head() returns first value", list.head() === "hamster");
check("tail() returns last value", list.tail() === "parrot");
check("size", list.size() === 4);
check("pop() removes and returns the LAST value", list.pop() === "parrot" && list.tail() === "cat" && list.size() === 3);
check("toString after pop", list.toString() === "( hamster ) -> ( dog ) -> ( cat ) -> null");
list.removeAt(0);
check("removeAt(0) removes the first value", list.head() === "dog" && list.size() === 2);
list.insertAt(1, "a", "b");
check("insertAt", list.toString() === "( dog ) -> ( a ) -> ( b ) -> ( cat ) -> null");
list.removeAt(2);
check("removeAt middle", list.toString() === "( dog ) -> ( a ) -> ( cat ) -> null");
const one = new LinkedList(); one.append("x");
check("pop on one-item list empties it", one.pop() === "x" && one.size() === 0 && one.head() === undefined);
check("pop on empty list is undefined", one.pop() === undefined);
let threw = false; try { list.removeAt(9); } catch (e) { threw = e instanceof RangeError; }
check("removeAt out of range throws RangeError", threw);
console.log(ok ? "ALL PASS" : "SOME FAILED");