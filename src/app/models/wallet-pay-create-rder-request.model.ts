export interface WalletPayCreateOrderRequest{
    userId:number;
    purchaseItems: PurchaseItem[];
}

export interface PurchaseItem {
    ItemId: string;
    Amount: string;
    Count: number;
    Description: string;
}