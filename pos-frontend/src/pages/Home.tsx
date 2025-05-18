import { BsCashCoin } from "react-icons/bs";
import Greetings from "../components/Home/Greetings";
import MiniCard from "../components/Home/MiniCard";
import BottomNav from "../components/shared/BottomNav";
import { GrInProgress } from "react-icons/gr";
import RecentOrders from "../components/Home/RecentOrders";
import PopularDishes from "../components/Home/PopularDishes";

const Home = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* LEFT DIV */}
      <div className="flex-[3]">
        <Greetings />
        <div className="flex items-center w-full gap-3 px-8 mt-8">
          <MiniCard
            title="Total Pendapatan"
            icon={<BsCashCoin />}
            number={512}
            footerNum={1.6}
          />
          <MiniCard
            title="Dalam Proses"
            icon={<GrInProgress />}
            number={16}
            footerNum={3.6}
          />
        </div>
        <RecentOrders />
      </div>
      {/* RIGHT DIV */}
      <div className="flex-[2]">
        <PopularDishes />
      </div>
      <BottomNav />
    </section>
  );
};

export default Home;
