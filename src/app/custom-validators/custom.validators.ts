import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class CustomValidators {
  public static pending: boolean;

  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if (['v@gmail.com', 'test@gmail.com'].includes(control.value)) {
      return { restrictedEmail: true }
    }

    return null;
  }

  // @ts-ignore
  static uniqEmail(control: FormControl): Promise<any> | Observable<any>  {
    return new Promise(resolve => {
      // method test
      setTimeout(() => {
        if (control.value === 'async@gmail.com') {
          resolve({ uniqEmail: true });
        } else {
          resolve(null)
        }
      }, 2000);
    })
  }
}
