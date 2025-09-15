import { Component, forwardRef } from '@angular/core';
import { AbstractInputComponent } from '../abstract-inpit';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormsModule } from '@angular/forms';

export const VALUE_ACCESSOR_PROVIDER = [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }
];

@Component({
  standalone: true,
  selector: 'app-checkbox',
  imports: [FormsModule],
  providers: [VALUE_ACCESSOR_PROVIDER],
  template: `
    <div class="form-group row">
      <div class="col-sm-10">
        <label class="col-sm-10 col-form-label col-form-label-sm">{{ this.inputTitle() }}</label>
        <input class="form-check-input" type="checkbox" [checked]="value" (change)="onChange($event)" (keyup)="onTouch()" />
      </div>
    </div>`
})
export class CheckboxComponent extends AbstractInputComponent {
  override onChange(value: any) {
    this.writeValue(value.target?.checked);
    this.propagateChange(this.value);
  }
}
