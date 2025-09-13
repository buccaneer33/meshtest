import { Component, forwardRef } from '@angular/core';
import { AbstractInputComponent } from '../abstract-inpit';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { FormsModule } from '@angular/forms';

export const VALUE_ACCESSOR_PROVIDER = [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StringInputComponent),
    multi: true
  },
  /*{
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: forwardRef(() => StringInputComponent),
  },*/
];

@Component({
  standalone: true,
  selector: 'app-string-input',
  imports: [FormsModule],
  providers: [VALUE_ACCESSOR_PROVIDER], // Регистрируем провайдеры
  template: `
    <input type="text" class="form-control" [(ngModel)]="innerValue" (blur)="notifyTouched()"/>
  `
})
export class StringInputComponent extends AbstractInputComponent {}
