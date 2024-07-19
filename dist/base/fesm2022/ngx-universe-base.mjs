import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, ViewChild, Output } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import _ from 'lodash-es';

class BaseService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class BaseComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BaseComponent, isStandalone: true, selector: "lib-base", ngImport: i0, template: `
    <p>
      base works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseComponent, decorators: [{
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

class Select {
    constructor(renderer) {
        this.renderer = renderer;
        this.options = [];
        this.value = '';
        this.placeholder = 'Select';
        this.className = '';
        this.updateEvent = new EventEmitter();
        this.selectActive = false;
        this.optionList = [];
        this.searchTerm = new FormControl('');
        this.isDisabled = false;
        this.renderer.listen('document', 'mousedown', (event) => {
            if (!this.selectEl.nativeElement.contains(event.target))
                this.selectActive = false;
        });
    }
    ngOnChanges() {
        this.optionList = this.options.map((o, index) => {
            return {
                ...o,
                label: o.label.toString(),
                key: index,
                checked: false,
            };
        });
        this.emitChange();
    }
    setSearchTerm(event) {
        const value = event.target.value;
        this.searchTerm.patchValue(value);
        this.selectActive = true;
    }
    filteredOptions() {
        const searchText = this.searchTerm.value?.trim().toLowerCase();
        if (!searchText)
            return this.optionList;
        return this.optionList.filter((x) => {
            return (x.label.toString().toLowerCase().includes(searchText) ||
                x.value.toString().includes(searchText));
        });
    }
    handleCheck(event, key) {
        this.searchTerm.patchValue('');
        this.searchInput.nativeElement.value = '';
        if (key === undefined)
            return;
        this.optionList.forEach((x, index) => {
            this.optionList[index].checked = false;
        });
        this.optionList[Number(key)].checked = true;
        const chosenLabel = this.optionList[Number(key)].label;
        this.value = chosenLabel;
        this.emitChange();
    }
    emitChange() {
        const selectedItem = this.optionList.filter((x) => x.checked) ?? [];
        const value = _.map(selectedItem, 'value');
        this.updateEvent.emit(value?.[0]);
        this.selectActive = false;
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.updateEvent.subscribe(fn);
    }
    registerOnTouched(fn) {
        this.updateEvent.subscribe(fn);
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Select, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: Select, isStandalone: true, selector: "base-select, [baseSelect]", inputs: { options: "options", value: "value", placeholder: "placeholder", className: "className" }, outputs: { updateEvent: "updateEvent" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: Select,
            },
        ], viewQueries: [{ propertyName: "searchInput", first: true, predicate: ["searchInput"], descendants: true }, { propertyName: "selectEl", first: true, predicate: ["select"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"search-select\" [class]=\"{ active: selectActive }\" #select>\n  <input\n    type=\"text\"\n    #searchInput\n    [placeholder]=\"value !== '' ? value : placeholder\"\n    (click)=\"selectActive = true\"\n    [class.active]=\"value !== ''\"\n    [class]=\"className\"\n    [disabled]=\"isDisabled\"\n    (keyup)=\"setSearchTerm($event)\"\n  />\n\n  <i class=\"gg-chevron-down\"></i>\n\n  <ul class=\"select-options\">\n    @for (item of filteredOptions(); track $index) {\n    <li\n      [tabindex]=\"$index\"\n      class=\"select-option\"\n      [class]=\"{ active: item.checked }\"\n      (click)=\"handleCheck($event, item.key)\"\n      (keyup)=\"handleCheck($event, item.key)\"\n    >\n      {{ item.label }}\n    </li>\n    } @empty {\n    <li class=\"no-record-found\">No records found</li>\n    }\n  </ul>\n</div>\n", styles: [".search-select{position:relative;display:flex;max-width:100%}.search-select input{display:flex;background:inherit;outline:none;width:100%;color:#06f;font-weight:500}.search-select input.active::placeholder{color:#06f!important;color:var(--text-link)!important}.search-select input:focus::placeholder{color:#aaa!important}.select-options{display:none;position:absolute;width:100%;min-width:42px;background:#fff;border-radius:5px;box-shadow:0 5px 20px #0003;border:1px solid #ccc;z-index:10;overflow:hidden;cursor:pointer;max-height:200px;overflow-y:auto;top:31px}.search-select.active .select-options{display:block}.select-option{font-family:inherit;cursor:inherit;color:inherit;display:flex;align-items:center;gap:10px;margin:0;font-size:.75rem;padding:.6rem;border-bottom:1px solid #eee}.select-option.active{color:#06f!important;color:var(--text-link)}.select-option:hover{color:#06f!important;color:var(--text-link);background:#e9f4ff}.no-record-found{white-space:nowrap}.gg-chevron-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs, .7));width:22px;height:22px;border:2px solid transparent;border-radius:100px;color:#777;position:absolute;right:0;top:50%;transform:translateY(-60%);scale:.8}.gg-chevron-down:after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);left:4px;top:2px}.no-record-found{color:#999;font-size:.7rem;padding:.6rem;font-style:italic;text-wrap:wrap}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Select, decorators: [{
            type: Component,
            args: [{ selector: 'base-select, [baseSelect]', standalone: true, imports: [ReactiveFormsModule], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: Select,
                        },
                    ], template: "<div class=\"search-select\" [class]=\"{ active: selectActive }\" #select>\n  <input\n    type=\"text\"\n    #searchInput\n    [placeholder]=\"value !== '' ? value : placeholder\"\n    (click)=\"selectActive = true\"\n    [class.active]=\"value !== ''\"\n    [class]=\"className\"\n    [disabled]=\"isDisabled\"\n    (keyup)=\"setSearchTerm($event)\"\n  />\n\n  <i class=\"gg-chevron-down\"></i>\n\n  <ul class=\"select-options\">\n    @for (item of filteredOptions(); track $index) {\n    <li\n      [tabindex]=\"$index\"\n      class=\"select-option\"\n      [class]=\"{ active: item.checked }\"\n      (click)=\"handleCheck($event, item.key)\"\n      (keyup)=\"handleCheck($event, item.key)\"\n    >\n      {{ item.label }}\n    </li>\n    } @empty {\n    <li class=\"no-record-found\">No records found</li>\n    }\n  </ul>\n</div>\n", styles: [".search-select{position:relative;display:flex;max-width:100%}.search-select input{display:flex;background:inherit;outline:none;width:100%;color:#06f;font-weight:500}.search-select input.active::placeholder{color:#06f!important;color:var(--text-link)!important}.search-select input:focus::placeholder{color:#aaa!important}.select-options{display:none;position:absolute;width:100%;min-width:42px;background:#fff;border-radius:5px;box-shadow:0 5px 20px #0003;border:1px solid #ccc;z-index:10;overflow:hidden;cursor:pointer;max-height:200px;overflow-y:auto;top:31px}.search-select.active .select-options{display:block}.select-option{font-family:inherit;cursor:inherit;color:inherit;display:flex;align-items:center;gap:10px;margin:0;font-size:.75rem;padding:.6rem;border-bottom:1px solid #eee}.select-option.active{color:#06f!important;color:var(--text-link)}.select-option:hover{color:#06f!important;color:var(--text-link);background:#e9f4ff}.no-record-found{white-space:nowrap}.gg-chevron-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs, .7));width:22px;height:22px;border:2px solid transparent;border-radius:100px;color:#777;position:absolute;right:0;top:50%;transform:translateY(-60%);scale:.8}.gg-chevron-down:after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);left:4px;top:2px}.no-record-found{color:#999;font-size:.7rem;padding:.6rem;font-style:italic;text-wrap:wrap}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }], propDecorators: { searchInput: [{
                type: ViewChild,
                args: ['searchInput']
            }], selectEl: [{
                type: ViewChild,
                args: ['select']
            }], options: [{
                type: Input
            }], value: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], className: [{
                type: Input
            }], updateEvent: [{
                type: Output
            }] } });

/* eslint-disable @typescript-eslint/no-explicit-any */
function searchList(dataList, searchText, options) {
    searchText = searchText?.trim()?.toLowerCase() ?? '';
    if (searchText === '')
        return dataList;
    return dataList.filter((data) => {
        if (options?.searchParams && !_.isMatch(data, options?.searchParams))
            return false;
        if (searchText === '')
            return true;
        const safeKeys = Object.keys(data).filter((k) => {
            return ['string', 'number'].includes(typeof data[k]);
        });
        let safeObject = _.pick(data, safeKeys);
        if (options?.searchKeys?.length)
            safeObject = _.pick(safeObject, options.searchKeys);
        const searchFound = Object.values(safeObject).filter((value) => {
            return value.toString().toLowerCase().includes(searchText);
        });
        return searchFound.length > 0;
    });
}
function isNullEmpty(val) {
    return val === null || val === undefined || val === '';
}
function downloadBlob(data, type, fileName) {
    const blob = new Blob([data], { type });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
function downloadExcel(records, fileName = 'file.csv') {
    //const content = 'data:text/csv;charset=utf-8,';
    const data = _.cloneDeep(records);
    const keys = Object.keys(data[0]);
    const header = keys.join(',');
    // escape comma in data
    data.forEach((row) => {
        Object.keys(row).forEach((key) => {
            if (typeof row[key] === 'string' && row[key]?.includes(',')) {
                row[key] = row[key].replace(/"/g, '');
                row[key] = `"${row[key]}"`;
            }
        });
    });
    const rows = data.map((row) => keys.map((key) => row?.[key] ?? '').join(','));
    const csv = [header, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
}
function isMathExpression(str) {
    try {
        const arithmeticRegex = /^[\d\s()+\-*/.]+$/;
        if (arithmeticRegex.test(str)) {
            const temp = window.eval(str);
            return temp && temp !== '' && !isNaN(temp);
        }
        return false;
    }
    catch (err) {
        return false;
    }
}
function parseJson(json) {
    try {
        return JSON.parse(json);
    }
    catch (e) {
        console.error('Error parsing JSON', e.stack);
        return null;
    }
}

var misc = /*#__PURE__*/Object.freeze({
    __proto__: null,
    downloadBlob: downloadBlob,
    downloadExcel: downloadExcel,
    isMathExpression: isMathExpression,
    isNullEmpty: isNullEmpty,
    parseJson: parseJson,
    searchList: searchList
});

/*
 * Public API Surface of base
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AppLoader, BaseComponent, BaseService, Select, misc as utils };
//# sourceMappingURL=ngx-universe-base.mjs.map
