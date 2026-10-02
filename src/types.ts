export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategoryType;
  subCategory?: string;
  finish?: string;
  size?: string;
  thickness?: string;
  material?: string;
  image: string;
  description: string;
  highlights: string[];
  inStock: boolean;
  popular?: boolean;
}

export type ProductCategoryType =
  | 'tiles'
  | 'adhesive'
  | 'sink'
  | 'granite'
  | 'sanitaryware'
  | 'plumbing'
  | 'electrical'
  | 'paints';

export interface CategoryInfo {
  id: ProductCategoryType;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: string;
  features: string[];
}

export interface RoomPreset {
  id: string;
  name: string;
  type: 'living' | 'kitchen' | 'bathroom' | 'elevation';
  description: string;
  image: string;
  materials: {
    id: string;
    name: string;
    texturePreview: string;
    finish: string;
    size: string;
    accentColor: string;
  }[];
}
