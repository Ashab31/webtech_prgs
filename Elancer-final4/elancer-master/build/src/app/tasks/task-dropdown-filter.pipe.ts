import { PipeTransform, Pipe } from '@angular/core';

import { ITask } from './task';

@Pipe ({
    name: 'shashiFilter'
})

export class DropdownFilterPipe implements PipeTransform {
    transform(value: ITask[], filterBy: string): ITask[] {
        filterBy=filterBy ? filterBy .toLocaleLowerCase() : null;
        return filterBy ? value.filter((task : ITask)=>
        task.Indus_focus.toLocaleLowerCase().indexOf(filterBy) !==-1) : value;
    }
}