import { Component, inject } from '@angular/core';
import { GoodsService } from '../services/goods.service';
import { MainTableComponent } from '../main-table/main-table.component';
import { FormComponent } from '../form/form.component';
import { ControlPanelComponent } from '../control-panel/control-panel.component';
import { EventsService } from '../services/events.service';
import { FormAction } from '../interfaces/editor-event';
import { GoodsItem } from '../interfaces/goods';

@Component({
  selector: 'app-goods.component',
  imports: [MainTableComponent, FormComponent, ControlPanelComponent],
  templateUrl: './goods.component.html',
  styleUrl: './goods.component.scss'
})
export class GoodsComponent {

  goodsService = inject(GoodsService);
  eventService = inject(EventsService);

  constructor(){
    this.goodsService.updateGoodsList();
  }

  tableEditHandler(data: GoodsItem){
    this.eventService.setModalEvent({ action: FormAction.edit, data })
  }
  tableRemoveHandler(data: GoodsItem){
    this.goodsService
      .removeGoodsItem(data)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.eventService.setModalEvent({ action: FormAction.close })
        },
        error: (error) => console.log(error),
        complete: () => this.goodsService.updateGoodsList()
      })
  }
  formAddHandler(data: GoodsItem){
    this.goodsService
      .addGoodsItem(data)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.eventService.setModalEvent({ action: FormAction.close })
        },
        error: (error) => console.log(error),
        complete: () => this.goodsService.updateGoodsList()
      })
  }
  formEditHandler(data: GoodsItem){
    this.goodsService
      .updateGoodsItem(data)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.eventService.setModalEvent({ action: FormAction.close })
        },
        error: (error) => console.log(error),
        complete: () => this.goodsService.updateGoodsList()
      })
  }
}
