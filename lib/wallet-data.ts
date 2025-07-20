export interface WalletBalance {
    main: number
    govault: number
  }
  
  export type TransactionType = "top-up" | "transfer" | "withdrawal" | "escrow-hold" | "escrow-release"
  
  export interface Transaction {
    id: string
    type: TransactionType
    title: string
    amount: number
    date: string // YYYY-MM-DD
    status: "completed" | "pending" | "failed" | "locked" | "released"
    description?: string
    walletId?: string // For transfers
  }
  
  export const mockWalletBalances: WalletBalance = {
    main: 12500.5,
    govault: 3500.0,
  }
  
  export const mockTransactions: Transaction[] = [
    {
      id: "t1",
      type: "top-up",
      title: "Wallet Top-Up",
      amount: 5000.0,
      date: "2024-07-19",
      status: "completed",
      description: "Via Flutterwave",
    },
    {
      id: "t2",
      type: "escrow-hold",
      title: "Funds Locked for Task #123",
      amount: 1500.0,
      date: "2024-07-18",
      status: "locked",
      description: "Task: Grocery Run",
    },
    {
      id: "t3",
      type: "transfer",
      title: "Sent to Sarah J.",
      amount: -2500.0,
      date: "2024-07-17",
      status: "completed",
      walletId: "GFG789012",
      description: "Payment for tutoring",
    },
    {
      id: "t4",
      type: "withdrawal",
      title: "Bank Withdrawal",
      amount: -10000.0,
      date: "2024-07-16",
      status: "pending",
      description: "To Access Bank",
    },
    {
      id: "t5",
      type: "escrow-release",
      title: "Funds Released for Task #456",
      amount: 2000.0,
      date: "2024-07-15",
      status: "released",
      description: "Task: Library Books",
    },
    {
      id: "t6",
      type: "top-up",
      title: "Wallet Top-Up",
      amount: 7500.0,
      date: "2024-07-14",
      status: "completed",
      description: "Via Bank Transfer",
    },
    {
      id: "t7",
      type: "escrow-hold",
      title: "Funds Locked for Task #789",
      amount: 2000.0,
      date: "2024-07-13",
      status: "locked",
      description: "Task: Dorm Cleaning",
    },
    {
      id: "t8",
      type: "transfer",
      title: "Received from Mike C.",
      amount: 1000.0,
      date: "2024-07-12",
      status: "completed",
      walletId: "GFG345678",
      description: "Payment for errand",
    },
  ]
  
  export const userWalletId = "GFG123456" // Mock user's wallet ID
  