import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({});
  }

  submit() {
    console.log('s', this.form)
  }
}
