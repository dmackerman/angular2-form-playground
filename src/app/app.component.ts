import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar';
import { AddressFormComponent } from './components/address-form';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    directives: [
        NavBarComponent,
        AddressFormComponent
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    public userForm: FormGroup;
    public formSubmitted: boolean;
    public events: any[] = [];
    public title = 'app works!';

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this.formBuilder.array([
                this.initAddress(),
                this.initAddress()
            ])
        });

        this.userForm.valueChanges.subscribe(value => {
            console.log(value);
        });
    }

    initAddress() {
        return this.formBuilder.group({
            street: ['', Validators.required],
            postcode: ['', Validators.minLength(5)]
        });
    }

    addAddress() {
        const control = <FormArray>this.userForm.controls['addresses'];
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        const control = <FormArray>this.userForm.controls['addresses'];
        control.removeAt(i);
    }

    save(model, isValid: boolean) {
        this.formSubmitted = true;
        console.log(model, isValid);
    }

}
