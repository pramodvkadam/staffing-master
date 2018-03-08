import { Component } from '@angular/core';

@Component({
  selector: 'sm-root',
  templateUrl: './app.component.html',
  styles: [`.checked {
			color: orange;
		}`]
})
export class AppComponent {
  title = 'sm';
}
