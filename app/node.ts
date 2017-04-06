export class Node {
  public label: string;
  public parent: Node;
  public children: Node[];
  public type: string;
  public isExpanded: boolean;
  private id: Number;
  public root: Node;
  public numberOfNodes: number;

  constructor(label: string, parent: Node, type: string, root: Node) {
    this.label = label;
    this.parent = parent;
    this.type = type;
    this.id = Math.floor(Math.random() * 1000);
    this.children = [];
    this.isExpanded = parent ? true : false;
    this.root = root;
    this.numberOfNodes = 1;
  }

  public addChild(): void {
    let newChildNodeType = this.type == 'AND' ? 'OR' : 'AND';
    let rootNode = this.root ? this.root : this;
    let newChild = new Node('', this, newChildNodeType, rootNode);
    this.children.push(newChild);

    newChild.root.numberOfNodes++;
    let nodeToUpdate = newChild;
    while (nodeToUpdate.parent != nodeToUpdate.root) {
      nodeToUpdate.parent.numberOfNodes++;
      nodeToUpdate = nodeToUpdate.parent;
    }
  }

  public removeChild(child: Node): void {
    child.root.numberOfNodes -= child.numberOfNodes;
    let nodeToUpdate = child;
    while (nodeToUpdate.parent != child.root) {
      nodeToUpdate.parent.numberOfNodes -= child.numberOfNodes;
      nodeToUpdate = nodeToUpdate.parent;
    }

    let index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }

  public toggleVisibiliy(): void {
    this.isExpanded = !this.isExpanded;
  }
}