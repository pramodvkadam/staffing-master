import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sm-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [`.full-page .full-page-background {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    display: block;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
}`]
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
