import { Component, OnInit } from '@angular/core';
import { BlogPageService } from 'src/app/core/blog-page.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit {
  mainBlogData: any;

  ngOnInit(): void {
    this.getBlogCards();
    this.blogPageService.setIntoLocaStorage();
    console.log('test');
  }
  constructor(private blogPageService: BlogPageService) {}

  getBlogCards() {
    const storedData = localStorage.getItem('blogData');

    if (storedData !== null) {
      this.mainBlogData = JSON.parse(storedData);
      console.log(this.mainBlogData);
      console.log(Object.keys(this.mainBlogData[0]));
    }
  }
}
