import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CounterComponentTest } from "./counter.component";

describe('CounterComponentTest', () => {
  let fixture: ComponentFixture<CounterComponentTest>;
  let component: CounterComponentTest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponentTest ]
    });

    fixture = TestBed.createComponent(CounterComponentTest);
    component = fixture.componentInstance;

    it('should be created', () => {
      expect(component).toBeDefined();
    });

    it('should render counter property', () => {
      let num = 42;

      component.counter = num;

      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css('.counter'));
      let el: HTMLElement = de.nativeElement;

      expect(el.textContent).toContain(num.toString());
    });

    it('should add green class if counter is even', () => {
      component.counter = 6;
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css('.counter'));
      let el: HTMLElement = de.nativeElement;

      expect(el.classList.contains('green')).toBeTruthy();
    });

    it('should increment counter if increment button was clicked', () => {
      let button = fixture.debugElement.query(By.css('#increment'));
      button.triggerEventHandler('click', null);

      expect(component.counter).toBe(1);
    });
  })
})
