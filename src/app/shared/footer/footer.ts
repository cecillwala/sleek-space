import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT } from '../site-data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly contact = CONTACT;
  protected readonly year = 2026; // updated per build; avoids Date.now() in zoneless/SSR contexts

  protected readonly nav = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];
}
