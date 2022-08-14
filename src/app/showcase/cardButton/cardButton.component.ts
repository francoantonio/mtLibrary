import { Component, OnInit } from '@angular/core';

interface buttonValue {
  icon: string;
  title: string;
  subtitle: string;
  check?: boolean;
}
@Component({
  selector: 'app-cardButton',
  templateUrl: './cardButton.component.html',
  styleUrls: ['./cardButton.component.css'],
})
export class CardButtonComponent {
  public valueButton: Array<buttonValue> = [
    { icon: 'wifi', title: 'wifi', subtitle: 'conect', check: true },
    { icon: 'bluetooth', title: 'Mi Smart Band', subtitle: 'Conectado' },
    { icon: 'mobiledata_off', title: 'wifi', subtitle: 'conect' },
    { icon: 'wifi_lock', title: 'wifi', subtitle: 'conect' },
    { icon: 'wifi', title: 'wifi', subtitle: 'conect' },
    { icon: 'bluetooth', title: 'Mi Smart Band', subtitle: 'Conectado' },
    { icon: 'mobiledata_off', title: 'wifi', subtitle: 'conect' },
    { icon: 'wifi_lock', title: 'wifi', subtitle: 'conect' },
    { icon: 'wifi', title: 'wifi', subtitle: 'conect' },
    { icon: 'bluetooth', title: 'Mi Smart Band', subtitle: 'Conectado' },
    { icon: 'mobiledata_off', title: 'wifi', subtitle: 'conect' },
    { icon: 'wifi_lock', title: 'wifi', subtitle: 'conect' },
  ];
  constructor() {}

  changeSelect(index: number): void {
    this._removeSelect();
    this.valueButton[index].check = true;
  }
  private _removeSelect(): void {
    this.valueButton = this.valueButton.map((value) => {
      return { ...value, check: false };
    });
  }
}
