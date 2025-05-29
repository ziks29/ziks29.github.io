export interface Product {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly image: string;
  readonly rating: number;
  readonly reviews: number;
  readonly category: string;
  readonly description: string;
}

export interface CartItem extends Product {
  readonly quantity: number;
}

export interface Notification {
  readonly id: number;
  readonly message: string;
  readonly type: "success" | "error" | "info";
  readonly visible: boolean;
}

export interface CheckoutInfo {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  readonly city: string;
  readonly state: string;
  readonly zipCode: string;
  readonly country: string;
  readonly paymentMethod: "credit" | "debit" | "paypal";
  readonly cardNumber: string;
  readonly expiryDate: string;
  readonly cvv: string;
}

export interface OrderSummary {
  readonly subtotal: number;
  readonly tax: number;
  readonly shipping: number;
  readonly total: number;
}
