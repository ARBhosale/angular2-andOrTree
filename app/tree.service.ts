export class TreeService{

  child3 = {value: '3', children:<any>[]};
  child4 = {value: '4', children:<any>[]};

  child5 = {value: '5', children:<any>[]};
  child6 = {value: '6', children:<any>[]};
  child1 = 
    {
      value:'1',
      children:[this.child3, this.child4]
    };
  child2 = 
    {
      value:'2',
      children:[this.child5, this.child6]
    };

  tree = 
    {
      value:'0',
      children:[this.child1, this.child2]
    };

    get()
    {
      return this.tree;
    }

    add(node:any){
      let val = Math.floor(Math.random()*1000+1);
      node.children.push({value: val, children:[]});
    }

    delete(node:any)
    {
      if(node.value == this.tree.value)
        return this.tree = {value:'', children:<any>[]};
      this.deleteChild(this.tree, node);
      
    }

    deleteChild(node:any, nodeToDelete:any)
    {
      if(!node.children)
        return;
      for(let i=0;i<node.children.length;i++)
      {
        if(node.children[i].value == nodeToDelete.value)
          return node.children.splice(i,1);
        else
          this.deleteChild(node.children[i], nodeToDelete);
      }
    }
}