import Image from 'next/image';
import SidebarNavigation from '@/components/SidebarNavigation';
import MobileNavigation from '@/components/MobileNavigation';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = { firstName: 'Dasun', lastName: 'Kanishka' };

    return (
        <main className="flex h-screen w-full font-inter">
            <SidebarNavigation user={loggedIn} />

            <div className="flex flex-col size-full">
                <div className="root-layout">
                    <Image
                        src="/icons/logo.svg"
                        width={32}
                        height={32}
                        alt="Logo"
                    />

                    <div>
                        <MobileNavigation user={loggedIn} />
                    </div>
                </div>

                {children}
            </div>
        </main>
    );
}
