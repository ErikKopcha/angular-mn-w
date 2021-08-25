import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public modal: boolean = false;
  @Output() public close: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  closeModal(e) {
    this.close.emit(e);
  }
}
