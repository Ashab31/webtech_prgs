import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }


validateRequest(form){
  if(form.task_name ==undefined ||form.component_type ==undefined ||form.component_category ==undefined ||form.short_description ==undefined ||form.solution_description ==undefined ||form.industry_focus ==undefined ||form.digital_group ==undefined ||form.supporting_group ==undefined ||form.offerings ==undefined){
return false;
  }
  else{
    return true;
  }
}


}
