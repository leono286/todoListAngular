import { Todo } from './../../todo.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state',
  pure: false
})
export class StatePipe implements PipeTransform {
  transform(value: Todo[], state?: boolean): Todo[] {
    if (typeof state === 'boolean') {
      const filteredList: Todo[] = [];
      value.forEach((todo, index) => {
        if (todo.completed === state) {
          todo['indexInList'] = index;
          filteredList.push(todo);
        }
      });
      return filteredList;
    } else {
      return value;
    }
  }
}
