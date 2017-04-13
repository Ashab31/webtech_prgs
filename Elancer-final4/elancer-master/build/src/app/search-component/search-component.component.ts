import { Component, OnInit } from '@angular/core';
import { SearchService} from  './search.service';
import { Subject } from 'rxjs/Subject'; 

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  //styleUrls: ['./search-component.component.css'
  providers: [SearchService]
})
export class SearchComponentComponent {

 results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }
}
