import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EditorEvent, FormAction } from '../interfaces/editor-event';


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private _formModalStatus = new BehaviorSubject<EditorEvent>({ action: FormAction.close });
  get formModalStatus$(){
    return this._formModalStatus.asObservable()
  }
  setModalEvent(event: EditorEvent){
    this._formModalStatus.next(event)
  }
  closeFormModal(){
    this._formModalStatus.next({ action: FormAction.close })
  }
}
