import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, SolutionsComponent, PricingComponent, ContactComponent],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-solutions></app-solutions>
    <app-pricing></app-pricing>
    <app-contact></app-contact>
  `,
})
export class HomeComponent {}
