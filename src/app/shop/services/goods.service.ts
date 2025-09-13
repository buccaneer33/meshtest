import { DestroyRef, inject, Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { GoodsItem } from '../interfaces/goods';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from '@environment/';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  private _goods = new BehaviorSubject<GoodsItem[]>([]);
  get goods$() : Observable<GoodsItem[]>{
    return this._goods
    .asObservable()
    .pipe(
      filter(goods => !!goods),
      takeUntilDestroyed(this.destroyRef)
    )
  }

  updateGoodsList(){
    if(!environment.dataUrl) { return ; }
    this.http
      .get<GoodsItem[]>(environment.dataUrl)
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(
        data => {
          console.log(data);
          this._goods.next(data);
        },
      )
  }
}
