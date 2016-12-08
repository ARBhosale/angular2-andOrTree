export class Node{
  public label : string;
  public parent : Node;
  public children : Node[];
  public type : string;
  public isVisible: boolean;
  private id : Number;
  
  constructor(label: string, parent: Node, type: string){
    this.label = label;
    this.parent = parent;
    this.type = type;
    this.id = Math.floor(Math.random()*1000);
    this.children = [];
    this.isVisible = parent ? true : false;
  }

  public addChild(): void{
    let newChildNodeType = this.type=='AND'?'OR':'AND';
    let newChild = new Node('', this, newChildNodeType);
    this.children.push(newChild);
  }

  public removeChild(child : Node): void{
    let index = this.children.indexOf(child);
    this.children.splice(index,1);
  }

  public toggleVisibiliy(): void{
    this.isVisible = !this.isVisible;
  }
}