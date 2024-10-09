export interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    category: string;
    description?: string;
    barcode?: string;
}
