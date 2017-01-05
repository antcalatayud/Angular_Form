import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';
import { Languages } from './models/languages.enum';
import { FormPosterService } from './services/form-poster.service';
import { NgForm } from '@angular/forms';

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

  constructor(private formPosterService: FormPosterService){}

  ngOnInit() {				
	  this.getLanguages();
  }

  validatePrimaryLanguage(value):void{
    this.hasPrimaryLanguageError = false;
    if(value === 'default')
      this.hasPrimaryLanguageError = true;
  } 

  getLanguages():void{
      for (var item in Languages) {
        if (Languages.hasOwnProperty(item)) {
            this.languages.push(item);
        }
     }
  }

  submitForm(form: NgForm):void{
    //validate selected languages. Done on client side but useful as an example
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError)
      return;
    
    this.formPosterService.postEmployeeForm(this.model)
    .subscribe(
      data => console.log('Form subscribe success: ' , data),
      err => console.error('Form subscribe error :', err)
    )
  }
}
