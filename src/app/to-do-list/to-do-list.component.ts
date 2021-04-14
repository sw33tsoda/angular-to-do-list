import { Component } from '@angular/core';
import { List } from './interfaces/list';
import { ListItem } from './interfaces/list-item';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent {
  input:string = '';
  list:List<ListItem> = {
    items:[{
      description:'Wake up.',
      isEditMode:false,
    },{
      description:'Brush teeth.',
      isEditMode:false,
    },{
      description:'Make bed.',
      isEditMode:false,
    }]
  }

  add() : void {
    if (this.input) {
      this.list.items.push({
        description:this.input,
        isEditMode:false,
      });
      this.input = '';
    }
  }

  delete(index:number) : void {
    this.list.items.splice(index,1);
  }

  handleToggleEditMode(index:number) : void {
    this.list.items[index].isEditMode = !this.list.items[index].isEditMode;
  }

  handleUpdateItem(event:any,index:number) : void {
    if (event.which == 13) {
      this.list.items[index].description = event.target.value;
      this.list.items[index].isEditMode = false;
    }
  }
}
