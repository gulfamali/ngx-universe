import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import _ from 'lodash-es';

export interface SelectOption {
  label: string | number;
  value: string | number;
  checked?: boolean;
  key?: number;
}

@Component({
  selector: 'base-select, [baseSelect]',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: Select,
    },
  ],
})
export class Select implements OnChanges, ControlValueAccessor {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('select') selectEl!: ElementRef;

  @Input() options: SelectOption[] = [];
  @Input() value: string | number = '';
  @Input() placeholder: string = 'Select';
  @Input() className: string = '';
  @Output() updateEvent = new EventEmitter<string | number>();

  selectActive: boolean = false;
  optionList: SelectOption[] = [];
  searchTerm = new FormControl('');
  isDisabled: boolean = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('document', 'mousedown', (event) => {
      if (!this.selectEl.nativeElement.contains(event.target)) this.selectActive = false;
    });
  }

  ngOnChanges(): void {
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

  setSearchTerm(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.patchValue(value);
    this.selectActive = true;
  }

  filteredOptions() {
    const searchText = this.searchTerm.value?.trim().toLowerCase();
    if (!searchText) return this.optionList;
    return this.optionList.filter((x) => {
      return (
        x.label.toString().toLowerCase().includes(searchText) ||
        x.value.toString().includes(searchText)
      );
    });
  }

  handleCheck(event: Event, key?: string | number) {
    this.searchTerm.patchValue('');
    this.searchInput.nativeElement.value = '';

    if (key === undefined) return;

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

  writeValue(value: string | number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.updateEvent.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.updateEvent.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
