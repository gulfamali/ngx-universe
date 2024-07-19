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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: Select, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.4", type: Select, isStandalone: true, selector: "base-select, [baseSelect]", inputs: { options: "options", value: "value", placeholder: "placeholder", className: "className" }, outputs: { updateEvent: "updateEvent" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: Select,
            },
        ], viewQueries: [{ propertyName: "searchInput", first: true, predicate: ["searchInput"], descendants: true }, { propertyName: "selectEl", first: true, predicate: ["select"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"search-select\" [class]=\"{ active: selectActive }\" #select>\n  <input\n    type=\"text\"\n    #searchInput\n    [placeholder]=\"value !== '' ? value : placeholder\"\n    (click)=\"selectActive = true\"\n    [class.active]=\"value !== ''\"\n    [class]=\"className\"\n    [disabled]=\"isDisabled\"\n    (keyup)=\"setSearchTerm($event)\"\n  />\n\n  <i class=\"gg-chevron-down\"></i>\n\n  <ul class=\"select-options\">\n    @for (item of filteredOptions(); track $index) {\n    <li\n      [tabindex]=\"$index\"\n      class=\"select-option\"\n      [class]=\"{ active: item.checked }\"\n      (click)=\"handleCheck($event, item.key)\"\n      (keyup)=\"handleCheck($event, item.key)\"\n    >\n      {{ item.label }}\n    </li>\n    } @empty {\n    <li class=\"no-record-found\">No records found</li>\n    }\n  </ul>\n</div>\n", styles: [".search-select{position:relative;display:flex;max-width:100%}.search-select input{display:flex;background:inherit;outline:none;width:100%;color:#06f;font-weight:500}.search-select input.active::placeholder{color:#06f!important;color:var(--text-link)!important}.search-select input:focus::placeholder{color:#aaa!important}.select-options{display:none;position:absolute;width:100%;min-width:42px;background:#fff;border-radius:5px;box-shadow:0 5px 20px #0003;border:1px solid #ccc;z-index:10;overflow:hidden;cursor:pointer;max-height:200px;overflow-y:auto;top:31px}.search-select.active .select-options{display:block}.select-option{font-family:inherit;cursor:inherit;color:inherit;display:flex;align-items:center;gap:10px;margin:0;font-size:.75rem;padding:.6rem;border-bottom:1px solid #eee}.select-option.active{color:#06f!important;color:var(--text-link)}.select-option:hover{color:#06f!important;color:var(--text-link);background:#e9f4ff}.no-record-found{white-space:nowrap}.gg-chevron-down{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs, .7));width:22px;height:22px;border:2px solid transparent;border-radius:100px;color:#777;position:absolute;right:0;top:50%;transform:translateY(-60%);scale:.8}.gg-chevron-down:after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);left:4px;top:2px}.no-record-found{color:#999;font-size:.7rem;padding:.6rem;font-style:italic;text-wrap:wrap}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.4", ngImport: i0, type: Select, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Jhc2Uvc3JjL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYmFzZS9zcmMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLENBQUMsTUFBTSxXQUFXLENBQUM7O0FBdUIxQixNQUFNLE9BQU8sTUFBTTtJQWVqQixZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBWDlCLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBb0IsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQVcsUUFBUSxDQUFDO1FBQy9CLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUU1RCxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixlQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUNoQyxlQUFVLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUcxQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzlDLE9BQU87Z0JBQ0wsR0FBRyxDQUFDO2dCQUNKLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDekIsR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFZO1FBQ3hCLE1BQU0sS0FBSyxHQUFJLEtBQUssQ0FBQyxNQUEyQixDQUFDLEtBQUssQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNsQyxPQUFPLENBQ0wsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2dCQUNyRCxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FDeEMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFZLEVBQUUsR0FBcUI7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUUxQyxJQUFJLEdBQUcsS0FBSyxTQUFTO1lBQUUsT0FBTztRQUU5QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7UUFFekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEUsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQXNCO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDOzhHQXhGVSxNQUFNO2tHQUFOLE1BQU0scU5BUk47WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxXQUFXLEVBQUUsTUFBTTthQUNwQjtTQUNGLGdQQ3JDSCxzMEJBOEJBLDZpRERGWSxtQkFBbUI7OzJGQVdsQixNQUFNO2tCQWRsQixTQUFTOytCQUNFLDJCQUEyQixjQUN6QixJQUFJLFdBQ1AsQ0FBQyxtQkFBbUIsQ0FBQyxhQUduQjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxXQUFXLFFBQVE7eUJBQ3BCO3FCQUNGOzhFQUd5QixXQUFXO3NCQUFwQyxTQUFTO3VCQUFDLGFBQWE7Z0JBQ0gsUUFBUTtzQkFBNUIsU0FBUzt1QkFBQyxRQUFRO2dCQUVWLE9BQU87c0JBQWYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUNvbnRyb2wsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gtZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdE9wdGlvbiB7XG4gIGxhYmVsOiBzdHJpbmcgfCBudW1iZXI7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBrZXk/OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jhc2Utc2VsZWN0LCBbYmFzZVNlbGVjdF0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5jc3MnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgdXNlRXhpc3Rpbmc6IFNlbGVjdCxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3QgaW1wbGVtZW50cyBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQFZpZXdDaGlsZCgnc2VhcmNoSW5wdXQnKSBzZWFyY2hJbnB1dCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NlbGVjdCcpIHNlbGVjdEVsITogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBvcHRpb25zOiBTZWxlY3RPcHRpb25bXSA9IFtdO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyID0gJyc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnU2VsZWN0JztcbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcbiAgQE91dHB1dCgpIHVwZGF0ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXI+KCk7XG5cbiAgc2VsZWN0QWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIG9wdGlvbkxpc3Q6IFNlbGVjdE9wdGlvbltdID0gW107XG4gIHNlYXJjaFRlcm0gPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNlbGVjdEVsLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgdGhpcy5zZWxlY3RBY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9uTGlzdCA9IHRoaXMub3B0aW9ucy5tYXAoKG8sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5vLFxuICAgICAgICBsYWJlbDogby5sYWJlbC50b1N0cmluZygpLFxuICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gIH1cblxuICBzZXRTZWFyY2hUZXJtKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICB0aGlzLnNlYXJjaFRlcm0ucGF0Y2hWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5zZWxlY3RBY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgZmlsdGVyZWRPcHRpb25zKCkge1xuICAgIGNvbnN0IHNlYXJjaFRleHQgPSB0aGlzLnNlYXJjaFRlcm0udmFsdWU/LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICghc2VhcmNoVGV4dCkgcmV0dXJuIHRoaXMub3B0aW9uTGlzdDtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25MaXN0LmZpbHRlcigoeCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgeC5sYWJlbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dCkgfHxcbiAgICAgICAgeC52YWx1ZS50b1N0cmluZygpLmluY2x1ZGVzKHNlYXJjaFRleHQpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hlY2soZXZlbnQ6IEV2ZW50LCBrZXk/OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLnNlYXJjaFRlcm0ucGF0Y2hWYWx1ZSgnJyk7XG4gICAgdGhpcy5zZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG5cbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgIHRoaXMub3B0aW9uTGlzdC5mb3JFYWNoKCh4LCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5vcHRpb25MaXN0W2luZGV4XS5jaGVja2VkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wdGlvbkxpc3RbTnVtYmVyKGtleSldLmNoZWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IGNob3NlbkxhYmVsID0gdGhpcy5vcHRpb25MaXN0W051bWJlcihrZXkpXS5sYWJlbDtcbiAgICB0aGlzLnZhbHVlID0gY2hvc2VuTGFiZWw7XG5cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgfVxuXG4gIGVtaXRDaGFuZ2UoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcigoeCkgPT4geC5jaGVja2VkKSA/PyBbXTtcbiAgICBjb25zdCB2YWx1ZSA9IF8ubWFwKHNlbGVjdGVkSXRlbSwgJ3ZhbHVlJyk7XG4gICAgdGhpcy51cGRhdGVFdmVudC5lbWl0KHZhbHVlPy5bMF0pO1xuICAgIHRoaXMuc2VsZWN0QWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUV2ZW50LnN1YnNjcmliZShmbik7XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVFdmVudC5zdWJzY3JpYmUoZm4pO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInNlYXJjaC1zZWxlY3RcIiBbY2xhc3NdPVwieyBhY3RpdmU6IHNlbGVjdEFjdGl2ZSB9XCIgI3NlbGVjdD5cbiAgPGlucHV0XG4gICAgdHlwZT1cInRleHRcIlxuICAgICNzZWFyY2hJbnB1dFxuICAgIFtwbGFjZWhvbGRlcl09XCJ2YWx1ZSAhPT0gJycgPyB2YWx1ZSA6IHBsYWNlaG9sZGVyXCJcbiAgICAoY2xpY2spPVwic2VsZWN0QWN0aXZlID0gdHJ1ZVwiXG4gICAgW2NsYXNzLmFjdGl2ZV09XCJ2YWx1ZSAhPT0gJydcIlxuICAgIFtjbGFzc109XCJjbGFzc05hbWVcIlxuICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAoa2V5dXApPVwic2V0U2VhcmNoVGVybSgkZXZlbnQpXCJcbiAgLz5cblxuICA8aSBjbGFzcz1cImdnLWNoZXZyb24tZG93blwiPjwvaT5cblxuICA8dWwgY2xhc3M9XCJzZWxlY3Qtb3B0aW9uc1wiPlxuICAgIEBmb3IgKGl0ZW0gb2YgZmlsdGVyZWRPcHRpb25zKCk7IHRyYWNrICRpbmRleCkge1xuICAgIDxsaVxuICAgICAgW3RhYmluZGV4XT1cIiRpbmRleFwiXG4gICAgICBjbGFzcz1cInNlbGVjdC1vcHRpb25cIlxuICAgICAgW2NsYXNzXT1cInsgYWN0aXZlOiBpdGVtLmNoZWNrZWQgfVwiXG4gICAgICAoY2xpY2spPVwiaGFuZGxlQ2hlY2soJGV2ZW50LCBpdGVtLmtleSlcIlxuICAgICAgKGtleXVwKT1cImhhbmRsZUNoZWNrKCRldmVudCwgaXRlbS5rZXkpXCJcbiAgICA+XG4gICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgPC9saT5cbiAgICB9IEBlbXB0eSB7XG4gICAgPGxpIGNsYXNzPVwibm8tcmVjb3JkLWZvdW5kXCI+Tm8gcmVjb3JkcyBmb3VuZDwvbGk+XG4gICAgfVxuICA8L3VsPlxuPC9kaXY+XG4iXX0=