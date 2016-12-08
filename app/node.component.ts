import { Component, Input } from '@angular/core';
import { TreeService } from './tree.service';

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
  @Input() nodeItem:any;
  constructor(private treeService : TreeService){}

  delete(node:any){
      this.treeService.deleteNode(node);
    }

  addToNode(node:any){
    this.treeService.addNode(node);
  }
}