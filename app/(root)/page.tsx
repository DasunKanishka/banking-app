import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Dashboard = () => {
    const loggedIn = {
        firstName: 'Dasun',
        lastName: 'Kanishka',
        email: 'dk@vampirecave.dev',
    };
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        subtext="Access and manage your accounts and transactions."
                        user={loggedIn?.firstName || 'Guest'}
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
