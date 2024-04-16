import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes', // The component's CSS element selector.
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html', // 	The location of the component's template file.
  styleUrl: './heroes.component.css', // The location of the component's private CSS styles.
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}

// Notes
/*
You alwasy import the Component symbol from the Angular core library and annotate the component class with @Component

Metadata refers to data that provides information about other data. It describes various aspects of data such as its format, structure, location, ownership, and usage. 

Why do we need Metadata: 
Metadata is essential because it provides vital information about data, such as its content, structure, and usage. This helps users find, understand, and manage data efficiently. Metadata aids in data organization, integration, analysis, and compliance, making it crucial for effective data management and decision-making.


*/
