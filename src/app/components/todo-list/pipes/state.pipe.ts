import { Todo } from './../../todo.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: Todo[], state?: boolean): Todo[] {

    console.log(typeof (state));

    if (typeof state === 'boolean') {
      return value.filter((todo) => {
        return todo.completed === state;
      });
    } else {
      return value;
    }
  }
}
