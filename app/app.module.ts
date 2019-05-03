import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DatePikerComponent } from './components/date-piker/date-piker.component';
import { DatePickerValueAccessor } from './components/date-piker/date-picker.directive';

import { FieldsetWrapper } from './wrappers/FiledsetWrapper.component';
import { LabelWrapper } from './wrappers/LabelWrapper.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'date',
          component: DatePikerComponent,
          wrappers: ['label', 'fieldset'],
        },
      ],
      wrappers: [
        { name: 'label', component: LabelWrapper },
        { name: 'fieldset', component: FieldsetWrapper }
      ]
    }), 
    FormlyBootstrapModule,
    NgbModule.forRoot() 
  ],
  declarations: [ AppComponent, HelloComponent, DatePikerComponent, DatePickerValueAccessor, FieldsetWrapper, LabelWrapper ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
