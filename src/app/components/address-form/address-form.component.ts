import { Component, Input } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';

@Component({
  selector: 'address-form',
  templateUrl: 'address-form.component.html',
  styleUrls: ['address-form.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AddressFormComponent {
    @Input() addressFormGroup;
}
