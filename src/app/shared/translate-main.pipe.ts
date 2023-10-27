import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../core/translation.service';

@Pipe({
  name: 'translateMain',
  pure: false,
})
export class TranslateMainPipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(text: any): any {
    return this.translationService.translate(text);
  }
}
