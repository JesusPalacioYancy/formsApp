import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('',),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })

  public myFormBasic: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3) ]],
    price: [null, [Validators.required, Validators.min(0) ] ],
    inStorage: [null, [Validators.required, Validators.min(0) ]],
  })

  constructor(private fb: FormBuilder){};


  isValidField(field: string): boolean | null{
    return this.myFormBasic.controls[field].errors && this.myFormBasic.controls[field].touched;
  };

  getFieldError(field: string): string | null  {
    if(!this.myFormBasic.controls[field]) return null;

    const errors = this.myFormBasic.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch(key){
        case 'required': 
          return 'Este campo es requerido';
        
        case 'minlength': 
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
      };
    };

    return null;
  };



  onSave(): void {
    if(this.myFormBasic.invalid)  {
      this.myFormBasic.markAllAsTouched();
      return;
    };

    console.log(this.myFormBasic.value)

    this.myFormBasic.reset()
  }

}
