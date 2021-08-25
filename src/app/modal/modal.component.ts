import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() public title: string = 'default title';
  @Input() public btnText: string = 'default text';
  @Input() public description: string = 'default description';
  
  @Output() public close: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  closeModal(e) {
    this.close.emit(e);
  }
}
