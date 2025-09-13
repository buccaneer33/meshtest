import { Component, forwardRef } from '@angular/core';
import { AbstractInputComponent } from '../abstract-inpit';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { FormsModule } from '@angular/forms';

export const VALUE_ACCESSOR_PROVIDER = [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  },
  /*{
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: forwardRef(() => CheckboxComponent),
  },*/
];

@Component({
  standalone: true,
  selector: 'app-boolean-checkbox',
  imports: [FormsModule],
  providers: [VALUE_ACCESSOR_PROVIDER], // Регистрируем провайдеры
  inputs: ['label'], // Входной параметр label
  template: `
    <label>
      <input type="checkbox" [(ngModel)]="innerValue" (change)="notifyForm(innerValue)">
      {{ label }}
    </label>
  `
})
export class CheckboxComponent extends AbstractInputComponent {
  label = ''; // Надпись рядом с флажком
}
