import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-write-off',
  templateUrl: './write-off.component.html',
  styleUrls: ['./write-off.component.scss'],
})
export class WriteOffComponent implements AfterViewInit {
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
          this.viewPortScroller.setOffset([0, 100]);
        }, 0);
      });
  }
}
