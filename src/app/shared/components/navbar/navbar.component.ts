import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
    document.body.style.overflow = this.isOpen ? 'hidden' : 'auto';
  }

  navigateTo(sectionId: string) {
    this.isOpen = false;
    document.body.style.overflow = 'auto';

    this.router.navigate(['/', sectionId]);

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });
      }
    }, 100);
  }

  private scrollHandler = () => {
    const sections = ['hero', 'about', 'solutions', 'pricing', 'contact'];

    let current = '';

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop - 100;
        if (window.scrollY >= top) {
          current = id;
        }
      }
    });

    if (current) {
      this.router.navigate(['/', current], { replaceUrl: true });
    }
  };

  ngOnInit() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
}
