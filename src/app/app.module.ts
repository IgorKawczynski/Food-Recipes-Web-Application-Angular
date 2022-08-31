import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { GMapModule } from 'primeng/gmap';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel'
import { SelectButtonModule } from 'primeng/selectbutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
    NavBarComponent,
    HomeComponent,
    RecipesComponent,
    FavoriteRecipesComponent,
    IngredientsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DividerModule,
    BrowserAnimationsModule,
    InputTextModule,
    TableModule,
    PasswordModule,
    FormsModule,
    OverlayPanelModule,
    DividerModule,
    SelectButtonModule,
    KeyFilterModule,
    InputMaskModule,
    AppRoutingModule,
    InputNumberModule,
    PasswordModule,
    FormsModule,
    KeyFilterModule,
    PanelModule,
    ToastModule,
    ButtonModule,
    MenubarModule,
    DialogModule,
    GMapModule,
    ButtonModule,
    DropdownModule,
    CalendarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
