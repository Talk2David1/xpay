import React from "react";
import UserGreeting from "../components/UserGreeting";
import MenuItems from "../components/MenuItems";
import Resources from "../components/Resources";
import AccountSupport from "../components/AccountSupport";
import WalletsCard from "../components/WalletsCard";
import Collection from "../components/Collection";
import Payout from "../components/Payout";
import SwapRates from "../components/SwapRates";
import Overview from "../components/Overview";
import TransactionStats from "../components/TransactionStats";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* UserGreeting Column */}
      <div className="lg:col-span-1 space-y-6">
        <UserGreeting />
        <MenuItems />
        <Resources />
        <AccountSupport />
      </div>

      {/* Main Content Area - 3 columns */}
      <div className="lg:col-span-3 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Wallets Column */}
          <div className="lg:col-span-1 space-y-4">
            <WalletsCard />
            <div className="grid grid-cols-2 gap-4">
              <Collection amount="$20,000.32" />
              <Payout amount="$20,000.32" />
            </div>
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-6">
            <SwapRates />
            <Overview />
          </div>
        </div>

        {/* Transaction Stats - spans the 3 columns */}
        <TransactionStats />
      </div>
    </div>
  );
};

export default Dashboard;
