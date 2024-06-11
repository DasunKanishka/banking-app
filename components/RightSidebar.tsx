import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BankCard from './BankCard';

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
    return (
        <aside className="right-sidebar">
            <section className="flex flex-col pb-8">
                <div className="profile-banner" />

                <div className="profile">
                    <div className="profile-img">
                        <span className="text-blue-500 text-4xl font-bold">
                            {user?.name[0]}
                        </span>
                    </div>

                    <div className="profile-details">
                        <h1 className="profile-name">{user?.name}</h1>

                        <p className="profile-email">{user?.email}</p>
                    </div>
                </div>
            </section>

            <section className="banks">
                <div className="flex justify-between w-full">
                    <h1 className="header-2">My Banks</h1>

                    <Link
                        href="/"
                        className="flex gap-2"
                    >
                        <Image
                            src="/icons/plus.svg"
                            width={20}
                            height={20}
                            alt="Plus"
                        />

                        <h2 className="text-gray-600 text-14 font-semibold">
                            Add Bank
                        </h2>
                    </Link>
                </div>

                {banks?.length > 0 && (
                    <div className="flex flex-1 flex-col items-center justify-center gap-4 relative">
                        <div className="relative z-10">
                            <BankCard
                                key={banks[0].$id}
                                account={banks[0]}
                                userName={user?.name}
                                showBalance={false}
                            />
                        </div>

                        {banks[1] && (
                            <div className="w-[90%] absolute top-8 right-0 z-0">
                                <BankCard
                                    key={banks[1].$id}
                                    account={banks[1]}
                                    userName={user?.name}
                                    showBalance={false}
                                />
                            </div>
                        )}
                    </div>
                )}
            </section>
        </aside>
    );
};

export default RightSidebar;
