import { Component} from '@angular/core';
import { ITask } from '../app/tasks/task';
// import {SearchCompService } from './services/search-comp.service';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',  
  styleUrls:['./app.component.css'],
  // providers: [SearchCompService]
})
export class AppComponent  {

 title="works";
  }


  // search() {
  //   this.searching = (<HTMLInputElement>document.getElementById("search_comp")).value;
  // this._appService.getTask().subscribe(data => { this.res = this.check(data);});
  //   }


  // check(data) {
  //     for (var key in data) {
  //     for (let key1 in data[key]) {
  //         if (this.searching.toUpperCase() == (data[key][key1]['name']).toUpperCase() || this.searching.toUpperCase() == (data[key][key1]['type']).toUpperCase() || this.searching.toUpperCase() == data[key][key1]['domain'].toUpperCase()) {
  //         this.search_flag = 1;
  //         this.url_c = data[key][key1]['url'];
  //         break;
  //       }
  //     }

  //   }
  //   if(this.search_flag == 1)
  //   {
  //     this.searching="found component in repository";
  //     document.getElementById('div_result').style.display = 'block';
  //   }
  //   else 
  //   {
  //   this.searching="not found component in repository";
  //  this.url_c = "Try raising a request for component";
  //   document.getElementById('div_result').style.display = 'block';
  //   }
  //  return null;
  //  }


