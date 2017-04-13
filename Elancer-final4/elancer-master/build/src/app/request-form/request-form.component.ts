import { RequestFormService } from './request-form.service';
import { Component, OnInit } from '@angular/core';
import {ValidateService } from '../services/validate.service';
// import {FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
  providers: [RequestFormService,ValidateService]
})
export class RequestFormComponent implements OnInit {
  task_name:string;
    component_type:string;
  component_category:string;
  short_description:string;
  solution_description:string;
  industry_focus: string;
  digital_group:string;
  supporting_group:string;
  offerings:string;
  
  
  // constructor(private service:RequestFormService){},
  // constructor(private vservice:ValidateService){},
  // constructor(private _flashMessagesService: FlashMessagesService){}
  constructor(private validateService: ValidateService,private service:RequestFormService){ }
  ngOnInit() {

  }   

onRequestSubmit(){
  const form ={
    task_name:this.task_name,
    component_type:this.component_type,
  component_category:this.component_category,
  short_description:this.short_description,
  solution_description:this.solution_description,
  industry_focus: this.industry_focus,
  digital_group:this.digital_group,
  supporting_group:this.supporting_group,
  offerings:this.offerings
  }
// if(!this.validateService.validateRequest(form)){
//   this.flashMessage.show("Please fill in all the fields",{cssClass:'alert-danger',timeout :5000});
//   // console.log('Please fill in all the fields');
//   return false;
// }
}


    saveForm(myObj:any){
      var date = new Date().toDateString();
      myObj.mid = 'm1039326';
      myObj.date = date;
      myObj.task_request_status = 0;
           this.service.saveRequest(myObj).subscribe( error => {
         console.error("Error in saving");
       //return Observable.throw(error);
       });
    }
  }
