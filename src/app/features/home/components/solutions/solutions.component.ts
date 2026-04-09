import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
})
export class SolutionsComponent {
  solutions = [
    { icon: '💼', title: 'Finance & Accounting', desc: 'Automate bookkeeping and reporting.' },
    { icon: '📊', title: 'CRM', desc: 'Manage customer lifecycle efficiently.' },
    { icon: '📈', title: 'Business Analytics', desc: 'Real-time insights and reporting.' },
    { icon: '🧩', title: 'Content Management', desc: 'Seamless digital experiences.' },
    { icon: '👥', title: 'Human Resources', desc: 'Hiring and performance simplified.' },
    { icon: '💰', title: 'Payroll', desc: 'Accurate payroll processing.' },
    { icon: '🎓', title: 'Learning & Development', desc: 'Upskill your workforce.' },
    { icon: '📍', title: 'Operations Tracking', desc: 'Track efficiency in real time.' },
  ];
}
