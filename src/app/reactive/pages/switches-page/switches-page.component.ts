import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { S } from 'vite/dist/node/types.d-FdqQ54oU';
import { ValidatoresService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit {

  public person = {
    gender: 'F',
    wantNotifications: false
  }

  public myFormSwitche: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ]
  });

  constructor(
    private fb: FormBuilder,
    private validatoresService: ValidatoresService
  ){}
  
  ngOnInit(): void {
    this.myFormSwitche.reset(this.person)
  }

  isValidField(field: string): boolean | null {
    return this.validatoresService.isValidField(this.myFormSwitche, field)
  };


  onSave(): void {
    if( this.myFormSwitche.invalid ) {
      this.myFormSwitche.markAllAsTouched()
      return;
    };

    const { termsAndConditions, ...newPerson } = this.myFormSwitche.value

    this.person = newPerson
    console.log(this.myFormSwitche.value)
    console.log(this.person)
  };


}
