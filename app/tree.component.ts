import { Component } from '@angular/core';
import { NodeComponent } from './node.component';
import { TreeService } from './tree.service';

@Component({
  selector: 'tree',
  templateUrl: 'app/tree.component.html'
})

export class TreeComponent{
  tree:any;
    constructor(private treeService : TreeService){

    }

    ngOnInit(){
      this.tree = this.treeService.get();
    }
    
}