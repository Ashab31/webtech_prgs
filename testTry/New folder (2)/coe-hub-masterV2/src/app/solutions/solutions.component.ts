import { AdalService } from 'ng2-adal/services/adal.service';
import { Component, OnInit } from '@angular/core';
import { SolutionsService } from './solutions.service';
import { Sol } from './solutions.interface';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
  providers: [SolutionsService]
})
export class SolutionsComponent implements OnInit {

   errorMessage: string;
   Solution: Sol[];
   name:string;
  constructor(private _solService: SolutionsService, private _adal:AdalService) { 
      this.name = this._adal.userInfo.profile.name;
  }

  ngOnInit() {
    this._solService.getSolution().subscribe(Solution => {
     this.Solution = Solution;
          },  error => this.errorMessage = <any>error);
  }


  CreateSolution(myObj:any){
    var d = new Date().toDateString();
    myObj.Created_By=this._adal.userInfo.profile.name;
    myObj.Created_Date=d;
    this._solService.addSolution(myObj);
  }

     public logOut(){
       this._adal.logOut();
}

getId(x){
  Cookie.set('SOid', x);
}
}
