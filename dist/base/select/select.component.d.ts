import { ElementRef, EventEmitter, OnChanges, Renderer2 } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export interface SelectOption {
    label: string | number;
    value: string | number;
    checked?: boolean;
    key?: number;
}
export declare class Select implements OnChanges, ControlValueAccessor {
    private renderer;
    searchInput: ElementRef;
    selectEl: ElementRef;
    options: SelectOption[];
    value: string | number;
    placeholder: string;
    className: string;
    updateEvent: EventEmitter<string | number>;
    selectActive: boolean;
    optionList: SelectOption[];
    searchTerm: FormControl<string | null>;
    isDisabled: boolean;
    constructor(renderer: Renderer2);
    ngOnChanges(): void;
    setSearchTerm(event: Event): void;
    filteredOptions(): SelectOption[];
    handleCheck(event: Event, key?: string | number): void;
    emitChange(): void;
    writeValue(value: string | number): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Select, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Select, "base-select, [baseSelect]", never, { "options": { "alias": "options"; "required": false; }; "value": { "alias": "value"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "className": { "alias": "className"; "required": false; }; }, { "updateEvent": "updateEvent"; }, never, never, true, never>;
}
