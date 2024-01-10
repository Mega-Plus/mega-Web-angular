import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { DocumetationComponent } from './documetation.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [CategoryComponent, DocumetationComponent],
  imports: [CommonModule, RouterModule, MatExpansionModule],
})
export class DocumentationModule {

}
