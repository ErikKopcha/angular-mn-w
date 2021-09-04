import { Component, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EventEmitter } from "events";

@Component({
    selector: 'app-counter',
    template: 'Counter: {{ counter }}'
})
export class CounterComponent {
    public counter: number = 0;
    public form: FormGroup;

    @Output() counterEmitter: EventEmitter = new EventEmitter();

    constructor(
        private fb: FormBuilder
    ) {
        this.form = fb.group({
            login: ['', Validators.required],
            email: ['', Validators.required]
        });
    }

    public increment() {
        this.counter++;
        // this.counterEmitter.emit(this.counter);
    }

    public decrement() {
        this.counter--;
    }
}