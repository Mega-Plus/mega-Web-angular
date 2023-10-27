import { Component } from '@angular/core';

@Component({
  selector: 'app-price-section',
  templateUrl: './price-section.component.html',
  styleUrls: ['./price-section.component.scss'],
})
export class PriceSectionComponent {
  panelOpenState?: boolean;
  compare?: boolean;
  compare2?: boolean;
  compare3?: boolean;
  compare4?: boolean;
  compare5?: boolean;
}
