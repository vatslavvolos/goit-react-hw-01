import Profile from "../Profile/Profile";
import FriendsList from "../FriendsList/FriendsList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import UserData from "../../UserData.json";
import friends from "../../Friends.json";
import transaction from "../../Transactions.json";
import "../App/App.module.css";
export default function App() {
  return (
    <>
      <Profile user={UserData} />
      <FriendsList friends={friends}></FriendsList>
      <TransactionHistory transaction={transaction}></TransactionHistory>
    </>
  );
}
