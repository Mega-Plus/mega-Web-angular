import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.scss'],
})
export class CashierComponent implements AfterViewInit {
  params: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private viewPortScroller: ViewportScroller
  ) {}

  ngAfterViewInit(): void {
    this.activatedRoute.params
      .pipe(map((res) => res['id']))
      .subscribe((res) => {
        this.params = res;
        console.log(res);
        if (this.params) {
          setTimeout(() => {
            this.viewPortScroller.scrollToAnchor(this.params);
          }, 0);
        } else {
          this.viewPortScroller.scrollToPosition([0, 0]);
          this.viewPortScroller.setOffset([0, 100]);
        }
      });
  }
}
