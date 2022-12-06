// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

// @Component({
//     selector: 'app-reactive-form',
//     templateUrl: './reactive-form.component.html',
//     styleUrls: ['./reactive-form.component.scss']
// })

// export class ReactiveFormComponent implements OnInit {

//     reactiveForm!: FormGroup;

//     constructor(private fb: FormBuilder) { }

//     ngOnInit(): void {
//         this.reactiveForm = this.fb.group({
//             heroForm: this.fb.group({
//                 name: this.fb.control(null, Validators.required),
//                 alterEgo: this.fb.control(null, Validators.required),
//                 enemy: this.fb.control(''),
//                 planet: this.fb.control(null, Validators.required)
//             }),
//             power: this.fb.array([]),
//             weakness: this.fb.array([])
//         });
//     }

//     getError(name: string, error: string) {
//         return this.reactiveForm.get(name)?.errors![error];
//     }

//     getForm(name: string) {
//         return this.reactiveForm.get(name);
//     }

//     getPower() {
//         return (this.reactiveForm.get('power') as FormArray).controls;
//     }

//     addPower() {
//         const control = this.fb.control(null);
//         (this.reactiveForm.get('power') as FormArray).push(control);
//     }

//     getWeakness() {
//         return (this.reactiveForm.get('weakness') as FormArray).controls;
//     }

//     addWeakness() {
//         const control = this.fb.control(null);
//         (this.reactiveForm.get('weakness') as FormArray).push(control);
//     }

//     submit() {
//         console.log(this.reactiveForm.value);
//     }
// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

    reactiveForm!: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.reactiveForm = this.fb.group({
            heroForm: this.fb.group({
                name: this.fb.control(null, [Validators.required]),
                alterEgo: this.fb.control(null, [Validators.required]),
                enemy: this.fb.control(''),
                planet: this.fb.control(null, [Validators.required, Validators.minLength(3)])
            }),
            power: this.fb.array([]),
            weakness: this.fb.array([])
        })
    }

    getError(name: string, error: string) {
        return this.reactiveForm.get(name)?.errors![error];
    }

    getForm(name: string) {
        return this.reactiveForm.get(name);
    }

    getPower() {
        return (this.reactiveForm.get('power') as FormArray).controls;
    }

    addPower() {
        const control = this.fb.control(null);
        (this.reactiveForm.get('power') as FormArray).push(control);
    }

    getWeakness() {
        return (this.reactiveForm.get('weakness') as FormArray).controls;
    }

    addWeakness() {
        const control = this.fb.control(null);
        (this.reactiveForm.get('weakness') as FormArray).push(control);
    }

    submit() {
        console.log(this.reactiveForm.value);
    }

}
