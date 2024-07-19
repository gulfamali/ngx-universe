import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, } from '@angular/forms';
import _ from 'lodash-es';
import * as i0 from "@angular/core";
export class Select {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Jhc2Uvc3JjL2xpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2Jhc2Uvc3JjL2xpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sQ0FBQyxNQUFNLFdBQVcsQ0FBQzs7QUF1QjFCLE1BQU0sT0FBTyxNQUFNO0lBZWpCLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFYOUIsWUFBTyxHQUFtQixFQUFFLENBQUM7UUFDN0IsVUFBSyxHQUFvQixFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBVyxRQUFRLENBQUM7UUFDL0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN0QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRTVELGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVUsR0FBbUIsRUFBRSxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRzFCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDckYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDOUMsT0FBTztnQkFDTCxHQUFHLENBQUM7Z0JBQ0osS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUN6QixHQUFHLEVBQUUsS0FBSztnQkFDVixPQUFPLEVBQUUsS0FBSzthQUNmLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQVk7UUFDeEIsTUFBTSxLQUFLLEdBQUksS0FBSyxDQUFDLE1BQTJCLENBQUMsS0FBSyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2xDLE9BQU8sQ0FDTCxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUN4QyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVksRUFBRSxHQUFxQjtRQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRTFDLElBQUksR0FBRyxLQUFLLFNBQVM7WUFBRSxPQUFPO1FBRTlCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUM1QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztRQUV6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwRSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBc0I7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7K0dBeEZVLE1BQU07bUdBQU4sTUFBTSxxTkFSTjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLEtBQUssRUFBRSxJQUFJO2dCQUNYLFdBQVcsRUFBRSxNQUFNO2FBQ3BCO1NBQ0YsZ1BDckNILHMwQkE4QkEsNmlEREZZLG1CQUFtQjs7NEZBV2xCLE1BQU07a0JBZGxCLFNBQVM7K0JBQ0UsMkJBQTJCLGNBQ3pCLElBQUksV0FDUCxDQUFDLG1CQUFtQixDQUFDLGFBR25CO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLEtBQUssRUFBRSxJQUFJOzRCQUNYLFdBQVcsUUFBUTt5QkFDcEI7cUJBQ0Y7OEVBR3lCLFdBQVc7c0JBQXBDLFNBQVM7dUJBQUMsYUFBYTtnQkFDSCxRQUFRO3NCQUE1QixTQUFTO3VCQUFDLFFBQVE7Z0JBRVYsT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3JtQ29udHJvbCxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaC1lcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0T3B0aW9uIHtcbiAgbGFiZWw6IHN0cmluZyB8IG51bWJlcjtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGtleT86IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFzZS1zZWxlY3QsIFtiYXNlU2VsZWN0XScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50LmNzcycsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VFeGlzdGluZzogU2VsZWN0LFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBAVmlld0NoaWxkKCdzZWFyY2hJbnB1dCcpIHNlYXJjaElucHV0ITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2VsZWN0Jykgc2VsZWN0RWwhOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFNlbGVjdE9wdGlvbltdID0gW107XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgPSAnJztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTZWxlY3QnO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuICBAT3V0cHV0KCkgdXBkYXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4oKTtcblxuICBzZWxlY3RBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgb3B0aW9uTGlzdDogU2VsZWN0T3B0aW9uW10gPSBbXTtcbiAgc2VhcmNoVGVybSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2VsZWN0RWwubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB0aGlzLnNlbGVjdEFjdGl2ZSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25MaXN0ID0gdGhpcy5vcHRpb25zLm1hcCgobywgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm8sXG4gICAgICAgIGxhYmVsOiBvLmxhYmVsLnRvU3RyaW5nKCksXG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgfVxuXG4gIHNldFNlYXJjaFRlcm0oZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIHRoaXMuc2VhcmNoVGVybS5wYXRjaFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLnNlbGVjdEFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBmaWx0ZXJlZE9wdGlvbnMoKSB7XG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IHRoaXMuc2VhcmNoVGVybS52YWx1ZT8udHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCFzZWFyY2hUZXh0KSByZXR1cm4gdGhpcy5vcHRpb25MaXN0O1xuICAgIHJldHVybiB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyKCh4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB4LmxhYmVsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0KSB8fFxuICAgICAgICB4LnZhbHVlLnRvU3RyaW5nKCkuaW5jbHVkZXMoc2VhcmNoVGV4dClcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGVjayhldmVudDogRXZlbnQsIGtleT86IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuc2VhcmNoVGVybS5wYXRjaFZhbHVlKCcnKTtcbiAgICB0aGlzLnNlYXJjaElucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcblxuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKHgsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3RbaW5kZXhdLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMub3B0aW9uTGlzdFtOdW1iZXIoa2V5KV0uY2hlY2tlZCA9IHRydWU7XG4gICAgY29uc3QgY2hvc2VuTGFiZWwgPSB0aGlzLm9wdGlvbkxpc3RbTnVtYmVyKGtleSldLmxhYmVsO1xuICAgIHRoaXMudmFsdWUgPSBjaG9zZW5MYWJlbDtcblxuICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICB9XG5cbiAgZW1pdENoYW5nZSgpIHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyKCh4KSA9PiB4LmNoZWNrZWQpID8/IFtdO1xuICAgIGNvbnN0IHZhbHVlID0gXy5tYXAoc2VsZWN0ZWRJdGVtLCAndmFsdWUnKTtcbiAgICB0aGlzLnVwZGF0ZUV2ZW50LmVtaXQodmFsdWU/LlswXSk7XG4gICAgdGhpcy5zZWxlY3RBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlRXZlbnQuc3Vic2NyaWJlKGZuKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUV2ZW50LnN1YnNjcmliZShmbik7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic2VhcmNoLXNlbGVjdFwiIFtjbGFzc109XCJ7IGFjdGl2ZTogc2VsZWN0QWN0aXZlIH1cIiAjc2VsZWN0PlxuICA8aW5wdXRcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgI3NlYXJjaElucHV0XG4gICAgW3BsYWNlaG9sZGVyXT1cInZhbHVlICE9PSAnJyA/IHZhbHVlIDogcGxhY2Vob2xkZXJcIlxuICAgIChjbGljayk9XCJzZWxlY3RBY3RpdmUgPSB0cnVlXCJcbiAgICBbY2xhc3MuYWN0aXZlXT1cInZhbHVlICE9PSAnJ1wiXG4gICAgW2NsYXNzXT1cImNsYXNzTmFtZVwiXG4gICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgIChrZXl1cCk9XCJzZXRTZWFyY2hUZXJtKCRldmVudClcIlxuICAvPlxuXG4gIDxpIGNsYXNzPVwiZ2ctY2hldnJvbi1kb3duXCI+PC9pPlxuXG4gIDx1bCBjbGFzcz1cInNlbGVjdC1vcHRpb25zXCI+XG4gICAgQGZvciAoaXRlbSBvZiBmaWx0ZXJlZE9wdGlvbnMoKTsgdHJhY2sgJGluZGV4KSB7XG4gICAgPGxpXG4gICAgICBbdGFiaW5kZXhdPVwiJGluZGV4XCJcbiAgICAgIGNsYXNzPVwic2VsZWN0LW9wdGlvblwiXG4gICAgICBbY2xhc3NdPVwieyBhY3RpdmU6IGl0ZW0uY2hlY2tlZCB9XCJcbiAgICAgIChjbGljayk9XCJoYW5kbGVDaGVjaygkZXZlbnQsIGl0ZW0ua2V5KVwiXG4gICAgICAoa2V5dXApPVwiaGFuZGxlQ2hlY2soJGV2ZW50LCBpdGVtLmtleSlcIlxuICAgID5cbiAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICA8L2xpPlxuICAgIH0gQGVtcHR5IHtcbiAgICA8bGkgY2xhc3M9XCJuby1yZWNvcmQtZm91bmRcIj5ObyByZWNvcmRzIGZvdW5kPC9saT5cbiAgICB9XG4gIDwvdWw+XG48L2Rpdj5cbiJdfQ==