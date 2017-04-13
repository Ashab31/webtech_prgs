import { DropdownFilterPipe} from './task-dropdown-filter.pipe';
import { ITask } from './task';
describe('DropdownFilterPipe: Default', () => {
    let pipe: DropdownFilterPipe;

    beforeEach(()=> {
        pipe = new DropdownFilterPipe();
    });

    it('providing no value returns null', ()=>{
        expect(pipe.transform(null, '')).toBeNull;
    });
});