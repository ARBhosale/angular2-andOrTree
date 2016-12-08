import { Component } from '@angular/core';
import { NodeComponent } from './node.component';
import { TreeService } from './tree.service';
import { Node } from './node';

@Component({
  selector: 'tree',
  templateUrl: 'app/tree.component.html',
  styles:[`
  h3{
    color:white;
  `]
})

export class TreeComponent{
  tree1: Node;
  tree2: Node;
  tree3: Node;
    constructor(private treeService : TreeService){

    }

    ngOnInit(){
      this.tree1 = this.treeService.getTree1();
      this.tree2 = this.treeService.getTree2();
      this.tree3 = this.treeService.getTree3();    
  }

  submitTree(tree: Node){
    console.log(tree);
  }
    
}