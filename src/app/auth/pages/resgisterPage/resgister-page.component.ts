import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatoresService } from '../../../shared/services/validators.service';
import { EmailValidators } from '../../../shared/validators/email-validators.service';

@Component({
  templateUrl: './resgister-page.component.html',
})
export class ResgisterPageComponent { 

  constructor(
    private fb: FormBuilder,
    private validatoresService: ValidatoresService,
    private emailValidators: EmailValidators
  ){}

  public myFormReguister: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatoresService.firstNameAndLastnamePattern)] ],
    email: ['', [Validators.required, Validators.pattern(this.validatoresService.emailPattern)], [this.emailValidators]  ],
    username: ['', [Validators.required, this.validatoresService.cantBeStraider ]],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required ] ],
  },
  {
    validators: [
      this.validatoresService.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  });

  isValidField(field : string ){
    return this.validatoresService.isValidField(this.myFormReguister, field)
  };

  onSave() {
    if(this.myFormReguister.invalid)  {
      this.myFormReguister.markAllAsTouched();
      return;
    };

    console.log(this.myFormReguister.value)

    this.myFormReguister.reset()

  };

}
