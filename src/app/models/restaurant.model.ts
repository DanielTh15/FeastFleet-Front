export interface Restaurant {
  restaurantId: String;
  name: String;
  cookType: String;
  address: String;
  description: String;
  calification: number;
  category: CategoryDTO;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface CategoryDTO extends Omit<Category, 'id' | 'description'> {

}
