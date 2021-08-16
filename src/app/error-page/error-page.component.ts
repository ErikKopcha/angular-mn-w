import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-error-page',
  styleUrls: ['error-page.component.css'],
  templateUrl: "error-page.component.html"
})
export class ErrorPageComponent implements OnInit{
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => { this.router.navigate(['/']); }, 3000);
  }
}
