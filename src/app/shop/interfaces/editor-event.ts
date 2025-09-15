import { GoodsItem } from "./goods";

export enum FormAction {
  'add',
  'edit',
  'close'
}

export interface EditorEvent {
  action: FormAction;
  data?: GoodsItem;
}
