import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Dashboard = () => {
    const loggedIn = { firstName: 'DK' };
    return (
        <section className="home">
            <div className="home-content">
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
            </div>
        </section>
    );
};

export default Dashboard;
