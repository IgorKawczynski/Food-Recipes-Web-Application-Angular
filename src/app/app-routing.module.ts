import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RecipesComponent } from './recipes/recipes.component'
import { LoginComponent } from './login/login.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'favorite-recipes', component: FavoriteRecipesComponent },
    { path: 'register', component: RegistrationComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

