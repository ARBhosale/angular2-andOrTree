import {Node} from './Node';

export class TreeService{

    root = new Node('root',null,'OR');

    generateTree()
    {
      let child1 = new Node('child1',this.root, 'AND');
      let child2 = new Node('child2',this.root, 'AND');
      this.root.addChild();
      this.root.addChild();
    }

    get()
    {
      this.generateTree();
      return this.root;
    }

    getTree1(){
     let root = new Node('root',null,'OR');
     root.addChild();
     root.addChild();
     root.addChild();
     root.children[0].addChild();
     root.children[0].addChild();
     root.children[1].addChild();
     root.children[1].addChild();
     root.children[2].addChild();
     root.children[2].addChild();
     return root;
    }

    getTree2(){
     let root = new Node('root',null,'OR');
     root.addChild();
     root.addChild();
     root.addChild();
     root.children[0].addChild();
     root.children[0].addChild();
     root.children[1].addChild();
     root.children[1].addChild();
     root.children[2].addChild();
     root.children[2].addChild();
     root.children[0].children[0].addChild();
     root.children[0].children[1].addChild();
     root.children[1].children[0].addChild();
     root.children[1].children[1].addChild();
     root.children[2].children[0].addChild();
     root.children[2].children[1].addChild();
     return root;
    }

    getTree3(){
     let root = new Node('root',null,'OR');
     root.addChild();
     root.addChild();
     root.addChild();
     root.children[0].addChild();
     root.children[0].addChild();
     root.children[1].addChild();
     root.children[1].addChild();
     root.children[2].addChild();
     root.children[2].addChild();
     root.children[0].addChild();
     root.children[0].addChild();
     root.children[1].addChild();
     root.children[1].addChild();
     root.children[2].addChild();
     root.children[2].addChild();
     root.children[0].children[0].addChild();
     root.children[0].children[1].addChild();
     root.children[1].children[0].addChild();
     root.children[1].children[1].addChild();
     root.children[2].children[0].addChild();
     root.children[2].children[1].addChild();
     root.children[0].children[0].addChild();
     root.children[0].children[1].addChild();
     root.children[1].children[0].addChild();
     root.children[1].children[1].addChild();
     root.children[2].children[0].addChild();
     root.children[2].children[1].addChild();
     return root;
    }

    addNode(node: Node)
    {
      node.addChild();
    }

    deleteNode(node: Node)
    {
      let parentNode = node.parent;
      parentNode.removeChild(node);
    }
} 