import { Component, forwardRef } from '@angular/core';
import { AbstractInputComponent } from '../abstract-inpit';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { FormsModule } from '@angular/forms';

export const VALUE_ACCESSOR_PROVIDER = [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextAreaInputComponent),
    multi: true
  },
  /*{
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: forwardRef(() => TextAreaInputComponent),
  },*/
];

@Component({
  standalone: true,
  selector: 'app-textarea-input',
  imports: [FormsModule],
  providers: [VALUE_ACCESSOR_PROVIDER], // Регистрируем провайдеры
  template: `
    <textarea class="" rows="5" cols="30" [(ngModel)]="innerValue" (blur)="notifyTouched()"></textarea>
  `
})
export class TextAreaInputComponent extends AbstractInputComponent {}
