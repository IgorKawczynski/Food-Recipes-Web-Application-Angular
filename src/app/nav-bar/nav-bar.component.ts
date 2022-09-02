import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api/menuitem';
import { IngredientsService } from '../ingredients/ingredients.service';
import { Ingredients } from '../ingredients/ingredients';
import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  ingredients: Ingredients[] = [];
  selectedIngredient: Ingredients = new Ingredients();

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private messageService: MessageService,
    private ingredientsService: IngredientsService,
    private recipesService: RecipesService 
  ) { }

  ngOnInit(): void {

    this.getIngredients();
    this.updateTitle();

  }

  public getIngredients(): void {
    this.ingredientsService.getIngredients().subscribe( (response:any) => {
      this.ingredients = response;
      console.log(response)
    }
    );
  }

  public updateTitle() {
    window.onblur = function () {
      setTimeout(function() {
        document.title = 'KSW TO GOWNO'; 
       }, 4000
      );
    }
    window.onfocus = function () {
       document.title = 'TOP Recipes :)'; 
    }
  }

  public onRowSelect(event: any) {
    this.messageService.add({severity: 'info', summary: 'Product Selected', detail: "View recipes with " + event.data.name});
  }

  public randomNumberFromInterval(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
  }


  public getRecipes(): void {

  }


}
