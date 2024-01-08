export interface Restaurant {
  restaurantId: string;
  name: string;
  cookType: string;
  address: string;
  description: string;
  image: Image[];
  calification: number;
  categories: { categoryId: number }[];
}

export interface Category {
  category: {
    CategoryId: number;
    name: string;
    description: string;
  }
}

export interface Image {
  imageUrl: string;
}




export interface CategoryDTO extends Omit<Category, 'id'> {

}
