import { Component } from '@angular/core';
import { AppCounterService } from "../services/app-counter.service";
import { LocalCounterService } from "../services/local-counter.service";

@Component({
  selector: 'app-base-service',
  templateUrl: './base-service.component.html',
  styleUrls: ['./base-service.component.css'],
  providers: [LocalCounterService]
})
export class BaseServiceComponent {
  constructor(
    private appCounterService: AppCounterService,
    private localCounterService: LocalCounterService
  ) { }
}
