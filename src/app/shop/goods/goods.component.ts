import { Component, inject, Signal } from '@angular/core';
import { GoodsService } from '../services/goods.service';
import { MainTableComponent } from '../main-table/main-table.component';
import { FormComponent } from '../form/form.component';
import { ControlPanelComponent } from '../control-panel/control-panel.component';

@Component({
  selector: 'app-goods.component',
  imports: [MainTableComponent, FormComponent, ControlPanelComponent],
  templateUrl: './goods.component.html',
  styleUrl: './goods.component.scss'
})
export class GoodsComponent {

  goodsService =  inject(GoodsService);

  constructor(){
    this.goodsService.updateGoodsList();
    /*this.goodsService.goods$.subscribe(data => console.log(data));*/
  }
}
