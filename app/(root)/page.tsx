import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Dashboard = async () => {
    const loggedIn = await getLoggedInUser();

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        subtext="Access and manage your accounts and transactions."
                        user={loggedIn?.name || 'Guest'}
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={4}
                        totalCurrentBalance={14400.0}
                    />
                </header>
                Recent Transaction
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 400 }, { currentBalance: 1200 }]}
            />
        </section>
    );
};

export default Dashboard;
