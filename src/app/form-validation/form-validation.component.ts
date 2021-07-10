import {Component, OnInit} from "@angular/core";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../custom-validators/custom.validators";

@Component({
  selector: 'app-form',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  form: FormGroup
  formData: Object
  pending: boolean = CustomValidators.pending

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',
        [
          Validators.email,
          Validators.required,
          CustomValidators.restrictedEmails
        ],
        [CustomValidators.uniqEmail]
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
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    if (this.form.valid) {
      this.formData = {...this.form.value};
      console.log('Form data: ', this.formData);
      this.form.reset();
    }
  }

  setCapital() {
    const cityMap = {
      us: 'Вашингтон',
      an: 'Лондон',
      ua: 'Киев'
    };

    const city = cityMap[this.form.get('address').get('country').value];

    this.setCity(city);
  }

  setCity(city: string = '') {
    this.form.patchValue({
      address: {
        city: city
      }
    });
  }

  addSkill() {
    const newSkill = new FormControl('', Validators.required);
    // @ts-ignore
    // (<FormArray>this.form.get('skills')).push();
    (this.form.get('skills') as FormArray).push(newSkill);
  }
}
