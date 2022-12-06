import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-td-form',
    templateUrl: './td-form.component.html',
    styleUrls: ['./td-form.component.scss']
})

export class TdFormComponent implements OnInit {

    // @ViewChild('form', { static: true }) tdForm!: NgForm;

    formInviato = '';

    heroForm = {
        name: '',
        alterEgo: '',
        power: '',
        enemy: '',
        planet: '',
        weakness: ''
    }

    constructor() { }

    ngOnInit(): void {
    }

    submit(tdForm: NgForm) {
        console.log(tdForm.value);
        tdForm.resetForm();
        this.formInviato = 'Eroe creato.'
    }

}
