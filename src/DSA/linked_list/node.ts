export class Node {
  private _next: Node;
  private _data: number;

  public get next(): Node {
    return this._next;
  }
  public get data(): number {
    return this._data;
  }

  constructor(data: number, next: Node) {
    this._data = data;
    this._next = null;
  }
}
