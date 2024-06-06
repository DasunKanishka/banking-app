'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants/index';
import { cn } from '@/lib/utils';

const SidebarNavigation = ({ user }: SiderbarProps) => {
    const pathname = usePathname();

    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 mb-12 cursor-pointer"
                >
                    <Image
                        src="/icons/logo.svg"
                        width={40}
                        height={40}
                        alt="Horizon Logo"
                        className="size-[24px] max-xl:size-14"
                    />

                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>
                {sidebarLinks.map(link => {
                    const isActive =
                        pathname === link.route ||
                        pathname.startsWith(`${link.route}/`);

                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={cn('sidebar-link', {
                                'bg-bank-gradient': isActive,
                            })}
                        >
                            <div className="size-8 relative">
                                <Image
                                    src={link.imgURL}
                                    alt={link.label}
                                    fill
                                    className={cn({
                                        'brightness-[4] invert-0': isActive,
                                    })}
                                />
                            </div>

                            <p
                                className={cn('sidebar-label', {
                                    '!text-white': isActive,
                                })}
                            >
                                {link.label}
                            </p>
                        </Link>
                    );
                })}
                User
            </nav>
            Footer
        </section>
    );
};

export default SidebarNavigation;
