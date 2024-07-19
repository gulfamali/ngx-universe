import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';

class BaseService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: BaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: BaseService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: BaseService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class BaseComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: BaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.4", type: BaseComponent, isStandalone: true, selector: "lib-base", ngImport: i0, template: `
    <p>
      base works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: BaseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-base', standalone: true, imports: [], template: `
    <p>
      base works!
    </p>
  ` }]
        }] });

class AppLoader {
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

/*
 * Public API Surface of base
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AppLoader, BaseComponent, BaseService };
//# sourceMappingURL=ngx-universe-base.mjs.map
