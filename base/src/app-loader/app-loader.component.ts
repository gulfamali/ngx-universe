import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-app-loader, [baseAppLoader]',
  standalone: true,
  imports: [],
  styleUrl: './app-loader.component.css',
  template: `@if (loading) {
    <div class="loader-overlay">
      <div class="linear"></div>
    </div>
    }`,
})
export class AppLoader {
  @Input() loading: boolean = false;
}
