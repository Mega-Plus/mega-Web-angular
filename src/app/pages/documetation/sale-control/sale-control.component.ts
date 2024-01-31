import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-sale-control',
  templateUrl: './sale-control.component.html',
  styleUrls: ['./sale-control.component.scss'],
})
export class SaleControlComponent {
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
        setTimeout(() => {
          this.viewPortScroller.scrollToAnchor(this.params);
        }, 0);
      });
  }
}
