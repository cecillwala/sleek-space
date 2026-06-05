import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';
import { BlogStore } from '../../shared/blog-store';

@Component({
  selector: 'app-blog-list',
  imports: [DatePipe, RouterLink, NgOptimizedImage, RevealDirective],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
})
export class BlogList {
  // Newest first, including any posts authored in this browser (preview).
  protected readonly posts = inject(BlogStore).posts;
}
