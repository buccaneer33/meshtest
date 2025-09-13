export interface GoodsItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  in_stock: boolean;
  discount: number;
  quantity_in_stock: number;
  charged_person_email: string;
  charged_person_phone: string;
}
