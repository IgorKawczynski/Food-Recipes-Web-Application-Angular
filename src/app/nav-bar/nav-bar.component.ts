import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api/menuitem';
import { IngredientsService } from '../ingredients/ingredients.service';
import { Ingredients } from '../ingredients/ingredients';

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
    private ingredientsService: IngredientsService
  ) { }

  ngOnInit(): void {

    this.getIngredients();

  }

  public getIngredients(): void {
    this.ingredientsService.getIngredients().subscribe( (response:any) => {
      this.ingredients = response;
    }
    );
  }
}
