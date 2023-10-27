import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteSectionComponent } from './home/quote-section/quote-section.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CardPageComponent } from './blog-page/card-page/card-page.component';

const routes: Routes = [
  {
    path: 'home',

    children: [
      {
        path: '',
        component: HomeComponent,
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },

  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'blog',
    component: BlogPageComponent,
  },
  {
    path: 'blog/:title',
    component: CardPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
