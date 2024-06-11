import Image from 'next/image';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex w-full min-h-screen justfy-between font-inter">
            {children}

            <div className="auth-asset">
                <div>
                    <Image
                        src="/icons/auth-image.svg"
                        alt="Auth Image"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </main>
    );
}
