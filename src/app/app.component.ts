import { Component } from '@angular/core';
import { Employee } from './models/employee.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Form';
  languages = ['English', 'Spanish', 'Other']
  model =  new Employee('','', true, 'low', 'default');
  hasPrimaryLanguageError = false;

  validatePrimaryLanguage(value){
    this.hasPrimaryLanguageError = false;
    if(value === 'default')
      this.hasPrimaryLanguageError = true;
  }
}
