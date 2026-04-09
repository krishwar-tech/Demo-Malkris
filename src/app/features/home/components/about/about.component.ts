import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  values = [
    { letter: 'M', title: 'Mission', desc: 'Purpose-driven at every layer' },
    { letter: 'A', title: 'Advancement', desc: 'Always evolving, never static' },
    { letter: 'L', title: 'Leadership', desc: 'Empowering teams to lead with confidence' },
    { letter: 'K', title: 'Knowledge', desc: 'Insights that fuel smarter decisions' },
    { letter: 'R', title: 'Research', desc: 'Built on evidence, refined by experience' },
    { letter: 'I', title: 'Innovation', desc: "Pioneering what's next, responsibly" },
    { letter: 'S', title: 'Strategy', desc: 'Turning vision into measurable outcomes' },
  ];

  tags = [
    'Machine Intelligence',
    'Augmented Learning',
    'Kinetic Innovation',
    'Responsive AI',
    'Sustainable Systems',
  ];
}
