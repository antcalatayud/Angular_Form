import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model'
import { Languages } from './models/languages.enum'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title : string = 'Employee Form';
  languages : string[] = [];
  model = new Employee('','', true, 'low', 'default');
  hasPrimaryLanguageError : boolean = false;

  validatePrimaryLanguage(value):void{
    this.hasPrimaryLanguageError = false;
    if(value === 'default')
      this.hasPrimaryLanguageError = true;
  }

  ngOnInit() {				
	  this.getLanguages();
  }

  getLanguages():void{
      for (var item in Languages) {
        if (Languages.hasOwnProperty(item)) {
            this.languages.push(item);
        }
     }
  }
}
