import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {
  isAnnual = false;

  plans = [
    {
      name: 'Starter',
      monthly: 29,
      annual: 23,
      features: ['Core modules', 'Basic analytics', 'Up to 5 users', 'Email support'],
    },
    {
      name: 'Professional',
      monthly: 49,
      annual: 39,
      featured: true,
      features: [
        'Everything in Starter',
        'Advanced analytics',
        'Up to 25 users',
        'Priority support',
      ],
    },
    {
      name: 'Enterprise',
      monthly: 199,
      annual: 159,
      features: ['All modules', 'Unlimited users', 'Dedicated support', 'Custom integrations'],
    },
  ];

  toggle(type: 'monthly' | 'annual') {
    this.isAnnual = type === 'annual';
  }
}
