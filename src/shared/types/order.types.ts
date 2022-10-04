export interface Product {
  id: number;
  memory: string;
  count: number;
}

export interface Order {
  id: number;
  products: Product[];
  totalPrice: number;
  createdAt: string;
}
