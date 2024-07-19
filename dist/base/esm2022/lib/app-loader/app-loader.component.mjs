import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AppLoader {
    constructor() {
        this.loading = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AppLoader, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: AppLoader, isStandalone: true, selector: "base-app-loader, [baseAppLoader]", inputs: { loading: "loading" }, ngImport: i0, template: `@if (loading) {
    <div class="loader-overlay">
      <div class="linear"></div>
    </div>
    }`, isInline: true, styles: [".loader-overlay{position:fixed;top:0;left:0;width:100vw;height:3px;z-index:2000}.linear{width:0vw;height:3px;background:#ffaa2a;animation:loader 3s forwards}@keyframes loader{0%{width:0vw}to{width:98vw}}.loader{border:3px solid #f3f3f3;border-top:3px solid #3498db;border-left:3px solid #3498db;border-radius:50%;width:24px;height:24px;animation:spin .2s linear infinite;position:absolute;right:10px;top:10px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AppLoader, decorators: [{
            type: Component,
            args: [{ selector: 'base-app-loader, [baseAppLoader]', standalone: true, imports: [], template: `@if (loading) {
    <div class="loader-overlay">
      <div class="linear"></div>
    </div>
    }`, styles: [".loader-overlay{position:fixed;top:0;left:0;width:100vw;height:3px;z-index:2000}.linear{width:0vw;height:3px;background:#ffaa2a;animation:loader 3s forwards}@keyframes loader{0%{width:0vw}to{width:98vw}}.loader{border:3px solid #f3f3f3;border-top:3px solid #3498db;border-left:3px solid #3498db;border-radius:50%;width:24px;height:24px;animation:spin .2s linear infinite;position:absolute;right:10px;top:10px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { loading: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9iYXNlL3NyYy9saWIvYXBwLWxvYWRlci9hcHAtbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFhakQsTUFBTSxPQUFPLFNBQVM7SUFYdEI7UUFZVyxZQUFPLEdBQVksS0FBSyxDQUFDO0tBQ25DOytHQUZZLFNBQVM7bUdBQVQsU0FBUyw0SEFOVjs7OztNQUlOOzs0RkFFTyxTQUFTO2tCQVhyQixTQUFTOytCQUNFLGtDQUFrQyxjQUNoQyxJQUFJLFdBQ1AsRUFBRSxZQUVEOzs7O01BSU47OEJBR0ssT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYXNlLWFwcC1sb2FkZXIsIFtiYXNlQXBwTG9hZGVyXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxuICBzdHlsZVVybDogJy4vYXBwLWxvYWRlci5jb21wb25lbnQuY3NzJyxcbiAgdGVtcGxhdGU6IGBAaWYgKGxvYWRpbmcpIHtcbiAgICA8ZGl2IGNsYXNzPVwibG9hZGVyLW92ZXJsYXlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaW5lYXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICB9YCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTG9hZGVyIHtcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xufVxuIl19