import Image from 'next/image';
import { redirect } from 'next/navigation';
import SidebarNavigation from '@/components/SidebarNavigation';
import MobileNavigation from '@/components/MobileNavigation';
import { getLoggedInUser } from '@/lib/actions/user.actions';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = await getLoggedInUser();

    !loggedIn && redirect('sign-in');

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
