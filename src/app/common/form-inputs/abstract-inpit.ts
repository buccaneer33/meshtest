import { Directive } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

// Настройка провайдеров для управления Value Accessor

@Directive({})
export abstract class AbstractInputComponent implements ControlValueAccessor {
  // Текущее значение элемента
  protected innerValue: any = null;

  // Callbacks для обновления формы
  private onChangeCallback: Function = () => {};
  private onTouchedCallback: Function = () => {};

  // Метод установки нового значения
  writeValue(value: any): void {
    this.innerValue = value;
  }

  // Регистрация колбека для отправки изменений в форму
  registerOnChange(fn: Function): void {
    this.onChangeCallback = fn;
  }

  // Регистрация колбека для уведомления формы о касании
  registerOnTouched(fn: Function): void {
    this.onTouchedCallback = fn;
  }

  // Метод оповещения формы о новом значении
  notifyForm(value: any) {
    this.onChangeCallback(value);
  }

  // Оповещение формы о событии касания
  notifyTouched() {
    this.onTouchedCallback();
  }

  // Возможность устанавливать свойство "disabled"
  setDisabledState?(isDisabled: boolean): void {
    console.log(`Disabling component with value ${isDisabled}`);
  }
}
