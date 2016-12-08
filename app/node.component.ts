import { Component, Input } from '@angular/core';
import { TreeService } from './tree.service';

@Component({
  selector: 'node',
  templateUrl: 'app/node.component.html',
  styles:[`
  .leftNode
{
  content: ' ';
  display: inline-block;
  background: #bada55 url('app/arrow-left.png') no-repeat;
  background-size: contain;
  height: 25px;
  width: 25px;
  float:right;
}
  .rightNode
  {
  content: ' ';
  display: inline-block;
  background: #bada55 url('app/arrow-right.png') no-repeat;
  background-size: contain;
  height: 25px;
  width: 25px;
  float:left;
}
.nodeCell{
  background-color:grey;border-style:solid;border-color:white;border-width:thick;
}
  `]
})

export class NodeComponent{
  @Input() nodeItem;
  constructor(private treeService : TreeService){}

  delete(node){
      this.treeService.delete(node);
    }

  addToNode(node){
    this.treeService.add(node);
  }
}