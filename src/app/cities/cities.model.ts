// cities/city.model.ts
export interface City {
  id: number;
  description: string;
  placesToSee: string[];
  rating: number;
  image: string;
  category: string;
  cost: number;
}

