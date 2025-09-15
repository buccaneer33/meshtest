import { Component, inject, output } from '@angular/core';
import { GoodsItem } from '../interfaces/goods';
import { GoodsService } from '../services/goods.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-main-table',
  imports: [AsyncPipe],
  templateUrl: './main-table.component.html',
  styleUrl: './main-table.component.scss'
})
export class MainTableComponent {
  readonly editEvent = output<GoodsItem>();
  readonly removeEvent = output<GoodsItem>();

  goodsService =  inject(GoodsService);
  get goodsList$(){
    return this.goodsService.goods$;
  }

  constructor(){}

  edit(row: GoodsItem){
    this.editEvent.emit(row);
  }
  remove(row: GoodsItem){
    this.removeEvent.emit(row)
  }
}
