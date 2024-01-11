import { Customer } from "./customer.model";

export interface Review{
  reviewId: number;
  customerId: string;
  restaurantId: string;
  comment: string;
  qualification: number;
  customer?: Customer;

}
