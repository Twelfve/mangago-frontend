import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { UserSessionService } from '../../services/userSession/userSession.service';
import { AsyncPipe } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SharedModule, HeaderComponent, AsyncPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  images = [
    'https://http2.mlstatic.com/D_NQ_900591-MLA81507560432_012025-OO.webp',
    'https://http2.mlstatic.com/D_NQ_753337-MLA81390675948_122024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_900591-MLA81507560432_012025-OO.webp',
  ];
  currentIndex = 0;

  interval: any;

  mangas = [
    {
      title: 'Manga 1',
      description: 'Description 1',
      image: 'https://otakuteca.com/images/books/cover/64cb883e56d87.webp',
      category: 'JOSEI'
    },
    {
      title: 'Manga 2',
      description: 'Description 2',
      image: 'https://otakuteca.com/images/books/cover/67447970c256d.webp',
      category: 'SHOUNEN'
    },
    {
      title: 'Manga 3',
      description: 'Description 3',
      image: 'https://otakuteca.com/images/books/cover/67036d0f99358.webp',
      category: 'SEINEN'
    },
    {
      title: 'Manga 4',
      description: 'Description 4',
      image: 'https://otakuteca.com/images/books/cover/64cacac18e007.webp',
      category: 'SHOUJO'
    },
    {
      title: 'Manga 5',
      description: 'Description 5',
      image: 'https://otakuteca.com/images/books/cover/64cb883e56d87.webp',
      category: 'JOSEI'
    },
    {
      title: 'Manga 6',
      description: 'Description 6',
      image: 'https://otakuteca.com/images/books/cover/67447970c256d.webp',
      category: 'SHOUNEN'
    },
    {
      title: 'Manga 7',
      description: 'Description 7',
      image: 'https://otakuteca.com/images/books/cover/67036d0f99358.webp',
      category: 'SEINEN'
    },
    {
      title: 'Manga 8',
      description: 'Description 8',
      image: 'https://otakuteca.com/images/books/cover/64cacac18e007.webp',
      category: 'SHOUJO'
    },
    {
      title: 'Manga 9',
      description: 'Description 9',
      image: 'https://otakuteca.com/images/books/cover/64cb883e56d87.webp',
      category: 'JOSEI'
    },
    {
      title: 'Manga 10',
      description: 'Description 10',
      image: 'https://otakuteca.com/images/books/cover/67447970c256d.webp',
      category: 'SHOUNEN'
    },
  ]

  ngOnInit(){
    // Set an interval to autoplay the slide
    if (typeof window !== 'undefined') {
      this.interval = window.setInterval(() => {
        this.nextSlide();
      }, 3500);
    }
  }

  ngOnDestroy(){
    // Clear the interval when the component is destroyed
    clearInterval(this.interval);
  }


  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  getTransformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }


}
