import { PipeTransform, Pipe } from '@angular/core';

import { ITask } from './task';

@Pipe ({
    name: 'poojaFilter'
})


export class TaskFilterPipe implements PipeTransform {

    transform(value: ITask[], filterBy: string): ITask[] {
        filterBy=filterBy ? filterBy .toLocaleLowerCase() : null;
        return filterBy ? value.filter((task : ITask) =>
        task.Task_Name.toLocaleLowerCase().indexOf(filterBy) !==-1) : value;
    }
}