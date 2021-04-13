import { Component } from '@angular/core';
import { List } from './interfaces/list';
import { ListItem } from './interfaces/list-item';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent {
  input:string = '';
  list:List<ListItem> = {
    items:[{
      description:'HEllo',
      isEditMode:false,
    }]
  }

  constructor() {
    console.log(this.list);
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

  delete(item:string) {
    this.list.items = this.list.items.filter(_item => _item.description !== item);
  }
}
