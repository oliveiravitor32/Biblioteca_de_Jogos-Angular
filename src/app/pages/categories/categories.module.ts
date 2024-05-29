import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryCardComponent } from './category-card/category-card.component';

@NgModule({
  declarations: [CategoriesComponent, CategoryCardComponent],
  imports: [CommonModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
