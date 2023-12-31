export interface Restaurant {
  restaurantId: String;
  name: String;
  cookType: String;
  address: String;
  description: String;
  image: Image[];
  calification: number;
  categories: Category [];
  randomImage?: String;
}

export interface Category {
  category: {
    id: number;
    name: string;
    description: string;
  };
}

export interface Image {
  imageUrl: String;
}




export interface CategoryDTO extends Omit<Category, 'id' | 'description'> {

}
