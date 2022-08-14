import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mt-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css'],
})
export class CardButtonComponent implements OnInit {
  @Input() check: boolean = false;
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  changeSelect() {
    this.check = !this.check;
    this.btnClick.emit();
  }
}
