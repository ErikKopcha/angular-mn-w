import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { RoutingComponent } from './routing.component';

class RouterStub {
  constructor() { }
  navigate(path: string[]) {}
}

class ActivatedRouteStub {
  private subject = new Subject<Params>();

  constructor() { }

  push(params: Params) {
    this.subject.next(params);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ]
    });

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to posts if go back', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.goBack();

    expect(spy).toHaveBeenCalledWith(['/posts']);
  });

  it('should navigate to 404 if id = 0', () => {
    let router = TestBed.get(Router);
    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    let spy = spyOn(router, 'navigate');

    route.push({ id: '0' });
    
    expect(spy).toHaveBeenCalledWith(['/404']);
  });
});
