import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogPageService } from 'src/app/core/blog-page.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit {
  mainBlogData: any;

  params?: string;
  safeVideoUrl: any;

  ngOnInit(): void {
    this.getBlogCards();
    this.getParams();
    this.filterJson();
  }
  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {}
  getBlogCards() {
    const storedData = localStorage.getItem('blogData');
    console.log(this.activatedRoute.snapshot.params['title']);

    if (storedData !== null) {
      this.mainBlogData = JSON.parse(storedData);
      console.log(this.mainBlogData);
    }
  }

  getParams() {
    this.params = this.activatedRoute.snapshot.params['title'];
    console.log(this.params);
  }

  filterJson() {
    const filteredData = this.mainBlogData.filter((item: any) => item.retailCardHeader === this.params);
    this.mainBlogData = filteredData.length > 0 ? filteredData[0].video : null;
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mainBlogData);
    console.log(this.mainBlogData);
  }
}
