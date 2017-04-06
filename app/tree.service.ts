import { Node } from './Node';

export class TreeService {

  getTree1(): Node {
    let root = new Node('root', null, 'OR', null);

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

  getTree2(): Node {
    let root = new Node('root', null, 'OR',null);
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

  getTree3(): Node {
    let root = new Node('root', null, 'OR',null);
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

  addNode(node: Node): void {
    node.addChild();
  }

  deleteNode(node: Node): void {
    let parentNode = node.parent;
    parentNode.removeChild(node);
  }
} 