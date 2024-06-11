import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { loggedOutUser } from '@/lib/actions/user.actions';

const Footer = ({ user, type }: FooterProps) => {
    const router = useRouter();

    const handleLogout = async () => {
        const loggedOut = await loggedOutUser();

        loggedOut && router.push('/sign-in');
    };

    return (
        <footer className="footer">
            <div
                className={
                    type === 'desktop' ? 'footer_name' : 'footer_name-mobile'
                }
            >
                <p className="text-gray-700 text-xl font-bold">
                    {user?.name[0]}
                </p>
            </div>

            <div
                className={
                    type === 'desktop' ? 'footer_email' : 'footer_email-mobile'
                }
            >
                <h1 className="text-gray-700 text-14 font-semibold truncate">
                    {user?.name}
                </h1>

                <p className="text-gray-600 text-14 font-normal truncate">
                    {user?.email}
                </p>
            </div>

            <div
                className="footer_image"
                onClick={handleLogout}
            >
                <Image
                    src="icons/logout.svg"
                    alt="Logout"
                    fill
                />
            </div>
        </footer>
    );
};

export default Footer;
