import { Component } from '@angular/core';
import { NodeComponent } from './node.component';
import { TreeService } from './tree.service';

@Component({
  selector: 'tree',
  templateUrl: 'app/tree.component.html',
  styles:[`
  h3{
    color:white; {
      
    }
  }
  `]
})

export class TreeComponent{
  tree1;
  tree2;
  tree3;
    constructor(private treeService : TreeService){

    }

    ngOnInit(){
      this.tree1 = this.treeService.getTree1();
      this.tree2 = this.treeService.getTree2();
      this.tree3 = this.treeService.getTree3();    
  }

  submitTree(tree){
    console.log(tree);
  }
    
}