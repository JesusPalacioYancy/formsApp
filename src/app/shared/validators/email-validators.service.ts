import {  Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { delay, Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})

export class EmailValidators implements AsyncValidator {

    validate(control: AbstractControl): Observable<ValidationErrors | null> {

        const email = control.value;


        const httpCallObservable = new Observable<ValidationErrors | null>( (sub) => {

            console.log({email})

            if(email === 'palacioj104@gmail.com'){
                sub.next({emailTaken: true });
                sub.complete();
            }

            sub.next(null)
            sub.complete()

        }).pipe(
            delay(2000)
        )
        
        // console.log(email);

        // return of({
        //    emailTaken: true 
        // }).pipe(
        //    delay( 2000 )
        // );

       return httpCallObservable;

    }


}

// return this.http.get<any[]>(`http://localhost:3000/users?q=${ email }`)
// .pipe(
//   // delay(3000),
//   map( resp => {
//     return ( resp.length === 0 )
//         ? null
//         : { emailTaken: true }
//   })
// );