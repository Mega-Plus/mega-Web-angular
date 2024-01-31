import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { DocumetationComponent } from './documetation.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductDocsComponent } from './product-docs/product-docs.component';
import { FillterDocsComponent } from './fillter-docs/fillter-docs.component';
import { GroupControlComponent } from './group-control/group-control.component';
import { SaleControlComponent } from './sale-control/sale-control.component';
import { CalculationComponent } from './calculation/calculation.component';
import { AddFunctionalityComponent } from './add-functionality/add-functionality.component';
import { RsWindowComponent } from './rs-window/rs-window.component';
import { CashierComponent } from './cashier/cashier.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { ReturnComponent } from './return/return.component';
import { ParametersComponent } from './parameters/parameters.component';
import { RealizationComponent } from './realization/realization.component';
import { WriteOffComponent } from './write-off/write-off.component';

@NgModule({
  declarations: [CategoryComponent, DocumetationComponent, ProductDocsComponent, FillterDocsComponent, GroupControlComponent, SaleControlComponent, CalculationComponent, AddFunctionalityComponent, RsWindowComponent, CashierComponent, SuppliersComponent, ReportsComponent, UsersComponent, ReturnComponent, ParametersComponent, RealizationComponent, WriteOffComponent],
  imports: [CommonModule, RouterModule, MatExpansionModule],
})
export class DocumentationModule {

}
