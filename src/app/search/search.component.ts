import { Component, OnInit } from '@angular/core';

import {SearchService} from '../search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public activities: any;
  public regions: any;
  public categories: any;
  public tours: any;
  public filters: Object = {
    activity_id: '',
    region_id: '',
    package_category_id: ''
  };

  constructor(public searchService: SearchService) {}

  getTours() {
    this.searchService.getTours(this.filters).subscribe( response => {
      this.tours = response.packages;
    });
  }

  ngOnInit() {
    this.searchService.getActivities().subscribe( response => {
      this.activities = response.activities;
    });

    this.searchService.getRegions().subscribe( response => {
      this.regions = response.regions;
    });

    this.searchService.getCategories().subscribe( response => {
      this.categories = response.package_categories;
    });

    this.getTours();
  }
}
