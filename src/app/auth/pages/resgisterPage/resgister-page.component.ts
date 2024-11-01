import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatoresService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './resgister-page.component.html',
})
export class ResgisterPageComponent { 

  constructor(
    private fb: FormBuilder,
    private validatoresService: ValidatoresService
  ){}

  public myFormReguister: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatoresService.firstNameAndLastnamePattern)] ],
    email: ['', [Validators.required, Validators.pattern(this.validatoresService.emailPattern)] ],
    username: ['', [Validators.required, this.validatoresService.cantBeStraider ]],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required ] ],
  })

  isValidField(field : string ){
    return this.validatoresService.isValidField(this.myFormReguister, field)
  }

  onSave() {
    return this.myFormReguister.markAllAsTouched();
  };

}
