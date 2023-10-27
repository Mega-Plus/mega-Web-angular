import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/core/translation.service';
import { TranslateMainPipe } from 'src/app/shared/translate-main.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu: boolean = true;

  navbar: any;
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.switchLanguage('ge');
  }
  onClick() {
    this.menu = !this.menu;
  }

  switchLanguage(event: any) {
    return this.translationService.setLanguage(event);
  }
}
