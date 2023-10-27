import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  load: boolean = false;
  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) {}

  switchLanguage(lang: string) {
    this.translateService.use(lang);
  }
  ngOnInit(): void {
    this.http.get<any[]>('./assets/i18n/en.json').subscribe((res) => {
      console.log(res);
    });
   
  }
}
