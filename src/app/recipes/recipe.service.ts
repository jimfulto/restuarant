import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe (
            'Chicken Biryani', 
            'A super-tasty Chicken Biryani - just awesome', 
            'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Rice', 1)
            ]),
        new Recipe (
            'Dumpling', 
            'Delicious dumpling', 
            'https://images.pexels.com/photos/4202392/pexels-photo-4202392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            [
                new Ingredient('Flour', 1),
                new Ingredient('Milk', 1)
            ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}