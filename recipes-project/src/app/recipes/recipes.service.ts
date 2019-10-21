import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imgUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      ingredients: ['Fries', 'Pork meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Gnocchi',
      imgUrl: 'https://images.101cookbooks.com/best-gnocchi-recipe-h.jpg?w=680&auto=format',
      ingredients: ['Flour', '1 Egg', 'Potatoes']
    },
    {
      id: 'r3',
      title: 'Pasta gorgonzola',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMu-5FS930mpBffdZxgKq05cjmaGoWER7uUu1Out4rWd4qG9AW8g',
      ingredients: ['Pasta', 'Gorgonzola', 'Milk cream']
    }
  ];
  
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
  
  getRecipe(id) {
    return this.recipes.find(recipe => {
      return recipe.id === id;
    });
  }

  deleteRecipe(id) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== id;
    });
  }
}
