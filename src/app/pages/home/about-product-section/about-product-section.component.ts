import { Component, OnInit } from '@angular/core';
import { BlogPageService } from 'src/app/core/blog-page.service';

@Component({
  selector: 'app-about-product-section',
  templateUrl: './about-product-section.component.html',
  styleUrls: ['./about-product-section.component.scss'],
})
export class AboutProductSectionComponent implements OnInit {
  ngOnInit(): void {
    this.blogService.setIntoLocaStorage();
    console.log("test");
  }

  constructor(private blogService: BlogPageService) {}
}
