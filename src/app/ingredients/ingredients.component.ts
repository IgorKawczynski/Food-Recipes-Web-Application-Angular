import { Component, OnInit } from '@angular/core';
import { Ingredients } from './ingredients';
import { IngredientsService } from './ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  ingredients: Ingredients[] = [];
  selectedIngredient: Ingredients = new Ingredients();

  constructor(private ingredientsService: IngredientsService) { 
    
  }

  ngOnInit(): void {
    this.getIngredients();
    console.log(this.getIngredients())
  }

  public getIngredients(): void {
    this.ingredientsService.getIngredients().subscribe( (response:any) => {

      this.ingredients = response;
      console.log(response);
    }
    );
  } 

}
