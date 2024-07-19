import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AppLoader {
    constructor() {
        this.loading = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: AppLoader, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.4", type: AppLoader, isStandalone: true, selector: "base-app-loader", inputs: { loading: "loading" }, ngImport: i0, template: `@if (loading) {
    <div class="loader-overlay">
      <div class="linear"></div>
    </div>
  }`, isInline: true, styles: [".loader-overlay{position:fixed;top:0;left:0;width:100vw;height:3px;z-index:2000}.linear{width:0vw;height:3px;background:#ffaa2a;animation:loader 3s forwards}@keyframes loader{0%{width:0vw}to{width:98vw}}.loader{border:3px solid #f3f3f3;border-top:3px solid #3498db;border-left:3px solid #3498db;border-radius:50%;width:24px;height:24px;animation:spin .2s linear infinite;position:absolute;right:10px;top:10px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: AppLoader, decorators: [{
            type: Component,
            args: [{ selector: 'base-app-loader', standalone: true, imports: [], template: `@if (loading) {
    <div class="loader-overlay">
      <div class="linear"></div>
    </div>
  }`, styles: [".loader-overlay{position:fixed;top:0;left:0;width:100vw;height:3px;z-index:2000}.linear{width:0vw;height:3px;background:#ffaa2a;animation:loader 3s forwards}@keyframes loader{0%{width:0vw}to{width:98vw}}.loader{border:3px solid #f3f3f3;border-top:3px solid #3498db;border-left:3px solid #3498db;border-radius:50%;width:24px;height:24px;animation:spin .2s linear infinite;position:absolute;right:10px;top:10px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { loading: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9iYXNlL3NyYy9hcHAtbG9hZGVyL2FwcC1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWFqRCxNQUFNLE9BQU8sU0FBUztJQVh0QjtRQVlXLFlBQU8sR0FBWSxLQUFLLENBQUM7S0FDbkM7OEdBRlksU0FBUztrR0FBVCxTQUFTLDJHQU5WOzs7O0lBSVI7OzJGQUVTLFNBQVM7a0JBWHJCLFNBQVM7K0JBQ0UsaUJBQWlCLGNBQ2YsSUFBSSxXQUNQLEVBQUUsWUFFRDs7OztJQUlSOzhCQUdPLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFzZS1hcHAtbG9hZGVyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW10sXG4gIHN0eWxlVXJsOiAnLi9hcHAtbG9hZGVyLmNvbXBvbmVudC5jc3MnLFxuICB0ZW1wbGF0ZTogYEBpZiAobG9hZGluZykge1xuICAgIDxkaXYgY2xhc3M9XCJsb2FkZXItb3ZlcmxheVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxpbmVhclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICB9YCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTG9hZGVyIHtcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xufVxuIl19