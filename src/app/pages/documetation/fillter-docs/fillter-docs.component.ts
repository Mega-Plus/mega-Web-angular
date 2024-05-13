import { ViewportScroller } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, sequenceEqual } from 'rxjs';

@Component({
  selector: 'app-fillter-docs',
  templateUrl: './fillter-docs.component.html',
  styleUrls: ['./fillter-docs.component.scss'],
})
export class FillterDocsComponent implements AfterViewInit {
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
