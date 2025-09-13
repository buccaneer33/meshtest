import { Component, inject, Signal } from '@angular/core';
import { GoodsItem } from '../interfaces/goods';
import { toSignal } from '@angular/core/rxjs-interop';
import { GoodsService } from '../services/goods.service';
import { MainTableComponent } from '../main-table/main-table.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-goods.component',
  imports: [MainTableComponent],
  templateUrl: './goods.component.html',
  styleUrl: './goods.component.scss'
})
export class GoodsComponent {

  goodsService =  inject(GoodsService);
  //goodsList = toSignal(this.goodsService.goods$)


  constructor(){
    this.goodsService.updateGoodsList();
    this.goodsService.goods$.subscribe(data => console.log(data));/**/
  }


  //goodsData: Signal <GoodsItem[] | undefined> = toSignal(this.goodsService.goods$);

}
