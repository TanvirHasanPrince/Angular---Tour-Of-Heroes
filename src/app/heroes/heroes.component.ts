import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes', // The component's CSS element selector.
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html', // 	The location of the component's template file.
  styleUrl: './heroes.component.css', // The location of the component's private CSS styles.
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


// Notes
/*
You alwasy import the Component symbol from the Angular core library and annotate the component class with @Component

Metadata refers to data that provides information about other data. It describes various aspects of data such as its format, structure, location, ownership, and usage. 

Why do we need Metadata: 
Metadata is essential because it provides vital information about data, such as its content, structure, and usage. This helps users find, understand, and manage data efficiently. Metadata aids in data organization, integration, analysis, and compliance, making it crucial for effective data management and decision-making.


*/
