import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
// TODO: Pagination of RecipesList
// import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailsComponent,
    AddRecipeComponent,
    EditRecipeComponent,
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // MatPaginatorModule,
  ],
})
export class RecipeModule {}
