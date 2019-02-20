import { iSubcategory } from ".";

export interface iCategory {
    id: string;
    name: string;
    subcategories: iSubcategory[];
  }
  