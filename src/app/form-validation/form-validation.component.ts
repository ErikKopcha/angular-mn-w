import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  form: FormGroup
  formData: Object

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',
        [
          Validators.email,
          Validators.required
        ]
      ),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      })
    });
  }

  submit() {
    if (this.form.valid) {
      this.formData = {...this.form.value};
      console.log('Form data: ', this.formData);
    }
  }
}
