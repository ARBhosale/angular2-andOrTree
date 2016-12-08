import { Component, Input } from '@angular/core';
import { TreeService } from './tree.service';
import { Node } from './node';

@Component({
  selector: 'node',
  templateUrl: 'app/node.component.html',
  styles:[`
  .orNode
{
  background-color:green;
}
  .andNode
  {
 background-color:red;
}
.nodeCell{
  border-style:solid;border-color:white;border-width:thick;
}
.rootCell{
  background-color:green;
}

  `]
})

export class NodeComponent{
  @Input() nodeItem: Node;
  constructor(private treeService : TreeService){}

  delete(node: Node): void{
      this.treeService.deleteNode(node);
    }

  addToNode(node: Node): void{
    this.treeService.addNode(node);
  }
}