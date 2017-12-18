import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  @Output() findClick = new EventEmitter<string>();

  findValue = '';

  constructor() { }

  ngOnInit() {
  }

  find() {
    this.findClick.emit(this.findValue);
  }

}
