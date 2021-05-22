import { Component } from "@angular/core";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})

export class TrainingComponent {
  public text: string = 'Count';
  public pushCount: number = 0;

  public src: string = 'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36';
  public twoWayBindingTitleTwo: string = 'test good';
  public twoWayBindingTitle: string = 'test';
  public title: string = 'Dynamic title';
  public inputResult: string = '';

  public toggleParagraph: boolean = true;
  public toggleClass: boolean = false;
  public switchToggle: boolean = true;
  public bgToggle: boolean = false;
  public classRed: boolean = false;

  public arrayNgFor: any = [1, 1, 2, 3, 5, 8, 13];
  public arr: any = [1,2,3];

  public objectsArray: any = [
    {
      title: 'Post 1',
      author: 'Erik',
      comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Inna', text: 'lorem 2'},
        {name: 'Tetiana', text: 'lorem 3'},
        {name: 'Anna', text: 'lorem 4'},
      ]
    },
    {
      title: 'Post 2',
      author: 'Alex',
      comments: [
        {name: 'Max 1', text: 'lorem 11'},
        {name: 'Inna 1', text: 'lorem 22'},
        {name: 'Tetiana 1', text: 'lorem 33'},
        {name: 'Anna 1', text: 'lorem 44'},
      ]
    },
  ];

  public now: Date = new Date();

  constructor() {
    setTimeout(() => {
      this.src = 'https://habrastorage.org/getpro/habr/upload_files/cf6/a92/b88/cf6a92b888d18f955bca67dbdb504c45.png';
    }, 2000);
  }

  public checkInputResult(event: KeyboardEvent) {
    this.inputResult = (<HTMLInputElement>event.target).value;
  }

  public onBlur(str: string) {
    this.inputResult = str;
  }

  public onInput(event: any) {
    this.twoWayBindingTitle = event.target.value;
  }

  public pushHandler() {
    this.pushCount++;
  }
}
