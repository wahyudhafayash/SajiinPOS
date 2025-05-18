export interface MiniCardProps {
  title: string;
  icon: React.ReactNode;
  number: number;
  footerNum: number;
}

export interface OrderListProps {
  name: string;
  itemCount: number;
  tableNumber: number;
  status: "ready" | "pending";
  initials: string;
}
