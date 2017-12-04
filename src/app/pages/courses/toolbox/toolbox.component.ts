import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  findValue = '';

  constructor() { }

  ngOnInit() {
  }

  find() {
    console.log(this.findValue);
  }

}
