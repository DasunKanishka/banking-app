import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatAmount } from '@/lib/utils';

const BankCard = ({ account, userName, showBalance }: CreditCardProps) => {
    return (
        <div className="flex flex-col">
            <Link
                href="/"
                className="bank-card"
            >
                <div className="bank-card_content">
                    <div>
                        <h1 className="text-white text-16 font-semibold">
                            {account.name || userName}
                        </h1>

                        <p className="text-white font-ibm-plex-serif font-black">
                            {formatAmount(account.currentBalance)}
                        </p>
                    </div>

                    <article className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h1 className="text-white text-12 font-semibold">
                                {userName}
                            </h1>

                            <h2 className="text-white text-12 font-semibold">
                                &#10040;&#10040; / &#10040;&#10040;
                            </h2>
                        </div>

                        <p className="text-white text-14 font-semibold traking-[1.2px]">
                            &#10040;&#10040;&#10040;&#10040;
                            &#10040;&#10040;&#10040;&#10040;
                            &#10040;&#10040;&#10040;&#10040;
                            <span className="ml-1 text-16">
                                {account.mask || `0000`}
                            </span>
                        </p>
                    </article>
                </div>

                <div className="bank-card_icon">
                    <Image
                        src="/icons/Paypass.svg"
                        width={20}
                        height={24}
                        alt="Pay"
                    />

                    <Image
                        src="/icons/mastercard.svg"
                        width={44}
                        height={32}
                        alt="Mastercard"
                        className="ml-4"
                    />
                </div>

                <Image
                    src="/icons/lines.png"
                    width={320}
                    height={192}
                    alt="Lines"
                    className="absolute top-0 left-0"
                />
            </Link>
        </div>
    );
};

export default BankCard;
