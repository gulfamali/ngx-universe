import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AppLoader {
    constructor() {
        this.loading = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: AppLoader, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.4", type: AppLoader, isStandalone: true, selector: "base-app-loader, [baseAppLoader]", inputs: { loading: "loading" }, ngImport: i0, template: `@if (loading) {
    <div class="loader-overlay">
      <div class="linear"></div>
    </div>
    }`, isInline: true, styles: [".loader-overlay{position:fixed;top:0;left:0;width:100vw;height:3px;z-index:2000}.linear{width:0vw;height:3px;background:#ffaa2a;animation:loader 3s forwards}@keyframes loader{0%{width:0vw}to{width:98vw}}.loader{border:3px solid #f3f3f3;border-top:3px solid #3498db;border-left:3px solid #3498db;border-radius:50%;width:24px;height:24px;animation:spin .2s linear infinite;position:absolute;right:10px;top:10px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: AppLoader, decorators: [{
            type: Component,
            args: [{ selector: 'base-app-loader, [baseAppLoader]', standalone: true, imports: [], template: `@if (loading) {
    <div class="loader-overlay">
      <div class="linear"></div>
    </div>
    }`, styles: [".loader-overlay{position:fixed;top:0;left:0;width:100vw;height:3px;z-index:2000}.linear{width:0vw;height:3px;background:#ffaa2a;animation:loader 3s forwards}@keyframes loader{0%{width:0vw}to{width:98vw}}.loader{border:3px solid #f3f3f3;border-top:3px solid #3498db;border-left:3px solid #3498db;border-radius:50%;width:24px;height:24px;animation:spin .2s linear infinite;position:absolute;right:10px;top:10px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { loading: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9iYXNlL3NyYy9hcHAtbG9hZGVyL2FwcC1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWFqRCxNQUFNLE9BQU8sU0FBUztJQVh0QjtRQVlXLFlBQU8sR0FBWSxLQUFLLENBQUM7S0FDbkM7OEdBRlksU0FBUztrR0FBVCxTQUFTLDRIQU5WOzs7O01BSU47OzJGQUVPLFNBQVM7a0JBWHJCLFNBQVM7K0JBQ0Usa0NBQWtDLGNBQ2hDLElBQUksV0FDUCxFQUFFLFlBRUQ7Ozs7TUFJTjs4QkFHSyxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jhc2UtYXBwLWxvYWRlciwgW2Jhc2VBcHBMb2FkZXJdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW10sXG4gIHN0eWxlVXJsOiAnLi9hcHAtbG9hZGVyLmNvbXBvbmVudC5jc3MnLFxuICB0ZW1wbGF0ZTogYEBpZiAobG9hZGluZykge1xuICAgIDxkaXYgY2xhc3M9XCJsb2FkZXItb3ZlcmxheVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxpbmVhclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIH1gLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBMb2FkZXIge1xuICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=