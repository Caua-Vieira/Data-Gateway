export interface OrderPayload {
    orderId: string;
    userId: string;
    items: Array<{
        productId: string;
        quantity: number;
    }>;
    totalAmount: number;
    shippingAddress: string;
    createdAt: Date;
}
