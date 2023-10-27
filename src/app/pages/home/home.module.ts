import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { AboutProductSectionComponent } from './about-product-section/about-product-section.component';
import { ProgramVisualComponent } from './program-visual/program-visual.component';
import { PriceSectionComponent } from './price-section/price-section.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesRoutingModule } from '../pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    QuoteSectionComponent,
    AboutSectionComponent,
    AboutProductSectionComponent,
    ProgramVisualComponent,
    PriceSectionComponent,
    SubscribeComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatExpansionModule,
    SharedModule,
    PagesRoutingModule,
  ],
})
export class HomeModule {}
