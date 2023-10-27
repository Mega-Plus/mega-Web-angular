import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDFaXNvUSNlqQoqlNBgCgppWcSeYxb5kDM"></script>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'megaPlus';
}
