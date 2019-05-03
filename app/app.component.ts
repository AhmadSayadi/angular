import { Component, VERSION } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular: ' + VERSION.full;
  form = new FormGroup({});
  userModel = { email: 'email@gmail.com' };
  userFields: Array<FormlyFieldConfig> = [{
    key: 'email',
    type: 'input',
    templateOptions: {
      type: 'email',
      label: 'Email address',
      placeholder: 'Enter email',
      required: true,
    }    
  }, {
    key: 'date',
    type: 'date',
    templateOptions: {
      label: 'date',
      placeholder: 'Enter date',
      required: true,
    }     
  }
];

  submit(user) {
    console.log(user);
  }  
}
