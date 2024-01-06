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
<<<<<<< HEAD
=======


>>>>>>> 4336b708d84b81430a5c224cbfb6a430860c3512
  }
}

export interface Image {
  imageUrl: string;
}




export interface CategoryDTO extends Omit<Category, 'id'> {

}
