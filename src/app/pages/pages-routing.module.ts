import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CardPageComponent } from './blog-page/card-page/card-page.component';
import { DocumetationComponent } from './documetation/documetation.component';
import { ProductDocsComponent } from './documetation/product-docs/product-docs.component';
import { FillterDocsComponent } from './documetation/fillter-docs/fillter-docs.component';
import { GroupControlComponent } from './documetation/group-control/group-control.component';
import { SaleControlComponent } from './documetation/sale-control/sale-control.component';
import { CalculationComponent } from './documetation/calculation/calculation.component';
import { AddFunctionalityComponent } from './documetation/add-functionality/add-functionality.component';
import { RsWindowComponent } from './documetation/rs-window/rs-window.component';
import { CashierComponent } from './documetation/cashier/cashier.component';
import { SuppliersComponent } from './documetation/suppliers/suppliers.component';
import { ReportsComponent } from './documetation/reports/reports.component';
import { UsersComponent } from './documetation/users/users.component';
import { ReturnComponent } from './documetation/return/return.component';
import { ParametersComponent } from './documetation/parameters/parameters.component';
import { RealizationComponent } from './documetation/realization/realization.component';
import { WriteOffComponent } from './documetation/write-off/write-off.component';

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

  {
    path: 'docs',
    component: DocumetationComponent,
    children: [
      {
        path: 'product',
        component: ProductDocsComponent,
      },
      {
        path: 'fillter/:id',
        component: FillterDocsComponent,
      },
      {
        path: 'fillter',
        component: FillterDocsComponent,
      },
      {
        path: 'groupControl',
        component: GroupControlComponent,
      },
      {
        path: 'saleControl',
        component: SaleControlComponent,
      },
      {
        path: 'saleControl/:id',
        component: SaleControlComponent,
      },
      {
        path: 'calculation',
        component: CalculationComponent,
      },
      {
        path: 'calculation/:id',
        component: CalculationComponent,
      },
      {
        path: 'addFunctionality',
        component: AddFunctionalityComponent,
      },
      {
        path: 'rsWindow',
        component: RsWindowComponent,
      },
      {
        path: 'rsWindow/:id',
        component: RsWindowComponent,
      },
      {
        path: 'cashier',
        component: CashierComponent,
      },
      {
        path: 'cashier/:id',
        component: CashierComponent,
      },
      {
        path: 'supplier',
        component: SuppliersComponent,
      },
      {
        path: 'supplier/:id',
        component: SuppliersComponent,
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
      {
        path: 'reports/:id',
        component: ReportsComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'users/:id',
        component: UsersComponent,
      },
      {
        path: 'return',
        component: ReturnComponent,
      },
      {
        path: 'return/:id',
        component: ReturnComponent,
      },
      {
        path: 'parameters',
        component: ParametersComponent,
      },
      {
        path: 'realization',
        component: RealizationComponent,
      },
      {
        path: 'writeoff/:id',
        component: WriteOffComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
