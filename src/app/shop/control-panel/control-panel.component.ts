import { Component, inject } from '@angular/core';
import { EventsService, FormAction } from '../services/events.service';

@Component({
  selector: 'app-control-panel',
  imports: [],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {
  events = inject(EventsService)
  add(){
    this.events.setModalStatus(FormAction.add);
  }

}
