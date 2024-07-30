interface ProductsTypes {
  product: string;
  quantity: number;
  price: number;
  created_at: string;
  updated_at: string;
}

interface QuotationInfoTypes {
  products: ProductsTypes[];
  name: string;
  total: number;
  created_at: string;
  updated_at: string;
}

interface User {
  isSuccess: boolean;
  code: string;
  message: string;
  category: string;
  result: {
    client_id: number;
    email: string;
    id: number;
    is_active: boolean;
  };
}

interface PastOrder {
  past_order_id: number;
  name: string;
}

interface ProductItemProps {
  category: string;
  id?: string;
  name: string;
  count?: string;
  isAdded?: boolean;
  unit: string;
  onAddItem?: (item: ProductItemProps) => void;
  onRemoveItem?: (id: string | undefined) => void;
}

interface ProductListProps {
  items: ProductItemProps[];
  isSearchResult: boolean;
  addedItems?: ProductItemProps[];
  onAddItem?: (item: ProductItemProps) => void;
  onRemoveItem: (id: string | undefined) => void;
}
