export interface Customer {
    idCustomer: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    totalReviews?: number; // Agregar este campo para almacenar el total de reseñas del cliente

}