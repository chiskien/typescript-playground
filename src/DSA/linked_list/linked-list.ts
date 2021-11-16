import { Node } from "../node/node";

export class LinkedList {
  public head: Node;
  public tail: Node;
  public size: number;

  constructor() {
    this.head = this.tail = null;
  }
  addToHead(newNode: Node) {
    if (this.isEmpty) {
      console.log("List is empty");
    } else {
      this.head.next = newNode;
    }
  }
  isEmpty(): boolean {
    return this.head === null;
  }
}
