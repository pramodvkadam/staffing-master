import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sm-side-bar',
  templateUrl: './side-bar.component.html',
  styles: [
      `
.sidebar .user .info>a>span {
    display: block;
    position: relative;
    opacity: 1;
}`
]
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
