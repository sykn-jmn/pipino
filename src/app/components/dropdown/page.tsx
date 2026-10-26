import { Apple, BusFront, Groceries, HeartPlus, House, Plus, ShoppingBasket, UserGroupIcon, Utensils, Wallet, Zap } from "lucide-react";
import Dropdown from "../ui/dropdown";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-wrap h-screen gap-4 bg-surface">
      <div className="flex flex-col gap-4 flex-wrap w-100">
        <Dropdown
          name="expenseCategory"
          label="Expense category"
          placeholder="Choose a category"
          icon={<Wallet />}
          options={[
            { name: "Groceries", value: "groceries", icon: <ShoppingBasket /> },
            { name: "Dining out", value: "dining-out", icon: <Utensils /> },
            { name: "Transportation", value: "transportation", icon: <BusFront /> },
            { name: "Utilities", value: "utilities", icon: <Zap /> },
            { name: "Healthcare", value: "healthcare", icon: <HeartPlus /> },
          ]}
          customButton={{
            icon: <Plus />,
            label: "Add new category",
          }}
        />
        <Dropdown
          name="Eyyy"
          label="EyyLabel"
          placeholder="Select an option"
          icon={<House />}
          options={[
            { name: "Hello", value: "hello", icon: <Apple /> },
            { name: "World", value: "world", icon: <UserGroupIcon /> },
          ]}
          customButton={{
            icon: <Plus />,
            label: "Add new grocery",
          }}
        />
      </div>
    </div>
  );
}
