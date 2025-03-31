import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { UserSessionService } from '../../services/userSession/userSession.service';
import { firstValueFrom } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories/categories.service';
import { ICategory } from '../../models/Category.model';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [SharedModule, HeaderComponent, AsyncPipe, TextareaModule],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.css'
})
export class SellComponent {

  categories: ICategory[] = [];

  isEmailVerified$ = this.userSessionService.isEmailVerified$;

  severity: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined = 'contrast';

  selectedCategory!: ICategory | null;

  selectedCategoryHistory: ICategory[] = [{
    id: 0,
    name: 'Inicio',
    description: 'All Categories',
    parentCategoryId: 0,
    isSelectable: false,
    image: '',
    hasSubcategories: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date()
  }];

  isCategorySelected = false;

  constructor(
    private userSessionService: UserSessionService,
    private router: Router,
    private categoriesService: CategoriesService
  ){}

  async ngOnInit() {
    await this.getMainCategories();
    try {
      const res = await firstValueFrom(this.isEmailVerified$);
      if (!res) {
      }
    } catch (error) {

    }
  }

  async getMainCategories(){
    try {
      const res = await firstValueFrom(this.categoriesService.getMainCategories());
      this.categories = res.data;
      console.log('res', this.categories);

    } catch (error) {
      console.log('error', error);
    }
  }

  navigateToVerifyEmail() {
    this.router.navigate(['/verify-email']);
  }

  selectCategory(category: ICategory){
    if (!category.isSelectable) {
      this.getSubcategories(category.id);
      this.selectedCategoryHistory.push(category);
      return;
    }
    this.selectedCategory = category;
  }

  chooseCategory(){
    this.selectedCategoryHistory.push(this.selectedCategory!);
    this.isCategorySelected = true;
  }

  async getSubcategories(categoryId: number){
    try {
      const res = await firstValueFrom(this.categoriesService.getSubCategories(categoryId));
      this.categories = res.data;
      console.log('res', res);
    } catch (error) {

    }
    // Implement logic to get subcategories
  }

  async navigateToCategory(category: ICategory, index: number){
    console.log('index', index);
    this.isCategorySelected = false;

    if (category.id == this.selectedCategoryHistory[(this.selectedCategoryHistory.length)-1].id) {
      return;
    }
    if (index === 0) {
      this.selectedCategory = null;
      this.selectedCategoryHistory.splice(index+1);
      await this.getMainCategories();
      return;
    }

    this.selectedCategoryHistory.splice(index+1);
    await this.getSubcategories(category.id);
  }

  description: string = '';

  limitLines(event: Event){
    console.log("lol");
    console.log('event', event);


    let textArea = event.target as HTMLTextAreaElement;
    let lines = textArea.value.split('\n');

    if (lines.length > 10) {
      this.description = lines.slice(0, 10).join('\n');
      textArea.value = this.description;
    }
  }

}
