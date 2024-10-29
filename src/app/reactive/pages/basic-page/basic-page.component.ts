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

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3) ]],
    price: [null, [Validators.required, Validators.min(0) ] ],
    inStorage: [null, [Validators.required, Validators.min(0) ]],
  })

  constructor(private fb: FormBuilder){};


  onSave(): void {
    if(this.myForm.invalid)  {
      this.myForm.markAllAsTouched();

      return;
    };

    console.log(this.myForm.value)

    this.myForm.reset()
  }

}
