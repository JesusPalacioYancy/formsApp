import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public myFromDynamic: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGame: this.fb.array([
      ['Gears of war', Validators.required],
      ['Halo', Validators.required],
    ]),
  });

  public myNewFavorite: FormControl = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder){};

  get favoriteGame () {
    return this.myFromDynamic.get('favoriteGame') as FormArray;
  };

  isValidField(field: string): boolean | null{
    return this.myFromDynamic.controls[field].errors 
    && this.myFromDynamic.controls[field].touched;
  };

  isValidFieldInArray(formArray: FormArray, i : number): boolean | null{
    return formArray.controls[i].errors 
    && formArray.controls[i].touched;
  };


  getFieldError(field: string): string | null  {
    if(!this.myFromDynamic.controls[field]) return null;

    const errors = this.myFromDynamic.controls[field].errors || {};

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


  onAddFavorite():void {
    if(this.myNewFavorite.invalid) return;
    const newGame = this.myNewFavorite.value

    this.favoriteGame.push(
      this.fb.control(newGame, [Validators.required])
    )

    this.myNewFavorite.reset()

  }


  onDeleteFavorite(i: number) {
    this.favoriteGame.removeAt(i)
  };

  onSumit(): void{
    if(this.myFromDynamic.invalid){
      return this.myFromDynamic.markAllAsTouched();
    };

    console.log(this.myFromDynamic.value);
    (this.myFromDynamic.controls['favoriteGame'] as FormArray) = this.fb.array([])
    this.myFromDynamic.reset();
  };

};
