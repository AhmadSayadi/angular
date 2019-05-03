import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-fieldset',
  template: `
    <div class="form-group TEST" [class.has-error]="showError">s
      <ng-template #fieldComponent></ng-template>
    </div>
  `,
})
export class FieldsetWrapper extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}