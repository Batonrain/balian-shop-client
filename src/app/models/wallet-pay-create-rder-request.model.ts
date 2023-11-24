export interface WalletPayCreateOrderRequest{
    userId:number;
    username: string;
    purchaseItems: PurchaseItem[];
}

export interface PurchaseItem {
    ItemId: string;
    Amount: string;
    Count: number;
    Description: string;
}