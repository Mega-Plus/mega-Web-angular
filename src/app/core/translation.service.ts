import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
  }

  setLanguage(lang: string) {
    this.translateService.use(lang);
  }

  translate(key: string): string {
    return this.translateService.instant(key);
  }
  
}
