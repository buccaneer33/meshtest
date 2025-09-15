import { Component, forwardRef } from '@angular/core';
import { AbstractInputComponent } from '../abstract-inpit';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { FormsModule } from '@angular/forms';

export const VALUE_ACCESSOR_PROVIDER = [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumberInputComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: forwardRef(() => NumberInputComponent),
  }
];

@Component({
  standalone: true,
  selector: 'app-number-input',
  imports: [FormsModule],
  providers: [VALUE_ACCESSOR_PROVIDER],
  template: `
    <div class="form-group row">
      <div class="col-sm-10">
        <label class="col-sm-10 col-form-label col-form-label-sm">{{ this.inputTitle() }}</label>
        <input type="number" class="form-control form-control-sm" [(ngModel)]="value" (change)="onChange()" (keyup)="onTouch()" />
        @if(validationText()){
          <div class="invalid-feedback d-block">{{validationText()}}</div>
        }
      </div>
    </div>
  `
})
export class NumberInputComponent extends AbstractInputComponent {}
