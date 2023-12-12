export interface WalletPayCreateOrderRequest{
    userId:number;
    username: string;
    purchaseItems: PurchaseItem[];
}

export interface PurchaseItem {
    Id: string;
    Name: string;
    Amount: string;
    Count: number;
    Description: string;
}