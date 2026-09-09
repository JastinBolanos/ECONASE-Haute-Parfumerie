export interface OlfactoryNotes {
  top: string;
  heart: string;
  base: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  volume: string;
  price: number;
  currency: string;
  description: string;
  olfactoryNotes: OlfactoryNotes;
  imageUrl: string;
}
