import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { FormPosterService } from './services/form-poster.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [FormPosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
