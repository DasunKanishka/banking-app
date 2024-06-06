'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants/index';
import { cn } from '@/lib/utils';

const MobileNavigation = ({ user }: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={32}
                        height={32}
                        alt="Menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>

                <SheetContent className="bg-white border-none">
                    <Link
                        href="/"
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Image
                            src="/icons/logo.svg"
                            width={40}
                            height={40}
                            alt="Horizon Logo"
                        />

                        <h1 className="text-black-1 font-ibm-plex-serif text-24 font-bold">
                            Horizon
                        </h1>
                    </Link>
                    <div className="mobile-nav-sheet">
                        <SheetClose asChild>
                            <nav className="flex flex-col gap-2 h-full pt-8 text-white">
                                {sidebarLinks.map(link => {
                                    const isActive =
                                        pathname === link.route ||
                                        pathname.startsWith(`${link.route}/`);

                                    return (
                                        <SheetClose
                                            asChild
                                            key={link.route}
                                        >
                                            <Link
                                                href={link.route}
                                                key={link.label}
                                                className={cn(
                                                    'mobilenav-sheet_close w-full',
                                                    {
                                                        'bg-bank-gradient':
                                                            isActive,
                                                    }
                                                )}
                                            >
                                                <Image
                                                    src={link.imgURL}
                                                    alt={link.label}
                                                    width={20}
                                                    height={20}
                                                    className={cn({
                                                        'brightness-[4] invert-0':
                                                            isActive,
                                                    })}
                                                />

                                                <p
                                                    className={cn(
                                                        'text-16 font-semibold text-black-2',
                                                        {
                                                            'text-white':
                                                                isActive,
                                                        }
                                                    )}
                                                >
                                                    {link.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                                User
                            </nav>
                        </SheetClose>
                        Footer
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNavigation;
