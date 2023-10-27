import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/core/translation.service';

@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.scss']
})
export class QuoteSectionComponent implements OnInit{
[x: string]: any;


  constructor(private translationService:TranslationService){}
  ngOnInit(): void {
   
  }

  translateText(text:any){
   return this.translationService.translate(text)
  }

}
