import { NgModule } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the ComponentsFiltersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-filters',
  templateUrl: 'components-filters.html'
})
export class FiltersComponent {

  text: string;

  constructor() {
    console.log('Hello ComponentsFiltersComponent Component');
    this.text = 'Hello World';
  }

}
