import { TaskFilterPipe} from './task-filter.pipe';
import { ITask } from './task';
describe('TaskFilterPipe: Default', () => {
    let pipe: TaskFilterPipe;

    beforeEach(()=> {
        pipe = new TaskFilterPipe();
    });

    it('providing no value returns null', ()=>{
        expect(pipe.transform(null, '')).toBeNull;
    });
});