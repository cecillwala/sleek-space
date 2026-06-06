import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogStore } from '../../shared/blog-store';

@Component({
  selector: 'app-blog-admin',
  imports: [RouterLink],
  templateUrl: './blog-admin.html',
  styleUrl: './blog-admin.scss',
})
export class BlogAdmin {
  protected readonly store = inject(BlogStore);
  protected readonly posts = this.store.posts;
  protected readonly exportText = signal('');
  protected readonly statusMsg = signal('');

  deletePost(slug: string): void {
    this.store.remove(slug);
  }

  exportAll(): void {
    this.exportText.set(this.store.exportJson());
    this.statusMsg.set('');
  }

  async copyExport(): Promise<void> {
    const text = this.exportText() || this.store.exportJson();
    this.exportText.set(text);
    try {
      await navigator.clipboard.writeText(text);
      this.statusMsg.set('Copied to clipboard.');
    } catch {
      this.statusMsg.set('Copy failed. Please select the text below and copy it manually.');
    }
  }
}
