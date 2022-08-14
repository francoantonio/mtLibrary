import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joinPipe',
  templateUrl: './joinPipe.component.html',
  styleUrls: ['./joinPipe.component.css'],
})
export class JoinPipeComponent implements OnInit {
  public value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor() {}

  ngOnInit() {}
}
