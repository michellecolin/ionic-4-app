import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  
  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
  }

  //ngOnDestroy -> Is used when we use the "back" naviagtion
  //Or we return to a previous app page 
  //Because when this happens the page we are on is removed from the
  //page's stack, therefore, destroyed

  ionViewDidEnter() {
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillLeave() {
  }

  ionViewDidLeave() {
  }
}
