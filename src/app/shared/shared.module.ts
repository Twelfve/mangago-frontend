import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    MultiSelectModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    CheckboxModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    MultiSelectModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    CheckboxModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
