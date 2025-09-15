import { Component, inject } from '@angular/core';
import { EventsService } from '../services/events.service';
import { FormAction } from '../interfaces/editor-event';

@Component({
  selector: 'app-control-panel',
  imports: [],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {
  events = inject(EventsService)
  add(){
    this.events.setModalEvent({ action: FormAction.add });
  }
}
