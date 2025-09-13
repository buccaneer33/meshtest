import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum FormAction {
  'add',
  'edit',
  'close'
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private _formModalStatus = new BehaviorSubject<FormAction>(FormAction.close);
  get formModalStatus$(){
    return this._formModalStatus.asObservable()
  }
  setModalStatus(status: FormAction){
    this._formModalStatus.next(status)
  }

}
