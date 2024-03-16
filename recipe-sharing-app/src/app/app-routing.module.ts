import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  
  //TODO: ADD ERROR PAGE 404!:
  // { path: '**', redirectTo: '' } // For now, it redirects to home for unknown paths
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
